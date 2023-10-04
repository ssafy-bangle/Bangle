package com.bangle.domain.order.service;

import com.bangle.domain.blockchain.service.EthereumService;
import java.io.IOException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.spec.InvalidKeySpecException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.bangle.domain.blockchain.dto.IpfsResponse;
import com.bangle.domain.blockchain.service.IpfsService;
import com.bangle.domain.book.dto.BookIdAddressResponse;
import com.bangle.global.util.CryptoUtil;
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.parameters.P;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.bookshelf.entity.Bookshelf;
import com.bangle.domain.bookshelf.repository.BookshelfRepository;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.repository.MemberRepository;
import com.bangle.domain.order.dto.OrderBookRequest;
import com.bangle.domain.order.dto.OrderRequest;
import com.bangle.domain.order.entity.Order;
import com.bangle.domain.order.entity.OrderBook;
import com.bangle.domain.order.entity.OrderStatus;
import com.bangle.domain.order.repository.OrderRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {

	private final MemberRepository memberRepository;
	private final BookRepository bookRepository;
	private final OrderRepository orderRepository;
	private final BookshelfRepository bookshelfRepository;
	private final IpfsService ipfsService;
	private final EthereumService ethereumService;
	private final RedisTemplate<String, String> template;

	@Value("${wallet.public}")
	private String serverPublicKey;

	@Transactional
	public List<BookIdAddressResponse> order(String userId, OrderRequest order)
		throws Exception {
		Member member = memberRepository.findByUserId(userId)
			.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자입니다."));
		List<Book> books = bookRepository.findAllById(order.books().stream()
			.map(OrderBookRequest::bookId)
			.toList());
		if (order.books().size() != books.size()) {
			throw new IllegalArgumentException("존재하지 않는 책입니다.");
		}

		List<OrderBook> orderBooks = new ArrayList<>();
		List<Bookshelf> bookshelfList = new ArrayList<>();
		int totalDust = 0;
		for (int i = 0; i < books.size(); i++) {
			Book book = books.get(i);
			OrderStatus orderStatus = order.books().get(i).orderStatus();
			totalDust += book.getPrice(orderStatus);
			orderBooks.add(OrderBook.createOrderBook(orderStatus, book));
			bookshelfList.add(Bookshelf.createBookShelf(member, book, orderStatus));
			// 오늘 구매수 증가
			String key = "bookId:" + book.getId() + ":today_purchases";
			String today_purchases = template.opsForValue().get(key);
			if (today_purchases == null) {
				template.opsForValue().set(key, "1");
			} else {
				template.opsForValue().set(key, Long.parseLong(today_purchases) + 1L + "");
			}
			// 누적 구매수 증가
			String total_key = "bookId:" + book.getId() + ":total_purchases";
			String total_purchases = template.opsForValue().get(total_key);
			if (total_purchases == null) {
				template.opsForValue().set(total_key, "1");
			} else {
				template.opsForValue().set(total_key, Long.parseLong(total_purchases) + 1L + "");
			}
			// 이번달 판매량 증가
			int currentMonth = LocalDate.now().getMonth().getValue();
			System.out.println(currentMonth);
			String month_key = "bookId:" + book.getId() + ":month_purchases:" + currentMonth;
			String month_purchases = template.opsForValue().get(month_key);
			if (month_purchases == null) {
				template.opsForValue().set(month_key, "1");
			} else {
				template.opsForValue().set(month_key, Long.parseLong(month_purchases) + 1L + "");
			}
		}
		Order newOrder = Order.createOrder(member, orderBooks, totalDust);

		for (Bookshelf bookshelf: bookshelfList) {
			// get SERVER's ipfs epub file
			byte[] encryptedServerEpub = ipfsService.downloadServerFileOf(bookshelf.getBook().getId());
			// decrypt SERVER's ipfs epub file
			byte[] decryptedServerEpub = CryptoUtil.decryptBook(serverPublicKey, encryptedServerEpub);
			// re-encrypt with MEMBER's public key
			byte[] encryptedMemberBook = CryptoUtil.encryptBook(member.getPublicKey(), decryptedServerEpub);
			// upload to ipfs
			IpfsResponse upload = ipfsService.upload(encryptedMemberBook);
			// add address to bookshelf entity
			bookshelf.setIpfsAddress(upload.getAddress());
			// save address to Sepolia network
			ethereumService.savePurchase(
				upload.getAddress(), member.getPublicKey(), bookshelf.getMember().getPublicKey(),
				bookshelf.getBook().getPrice(OrderStatus.BUY));
		}

		orderRepository.save(newOrder);
		bookshelfRepository.saveAll(bookshelfList);
		// book id 오름차순으로 정렬하고 {bookid, address} 반환
		return bookshelfList.stream().sorted().map(BookIdAddressResponse::new).toList();
	}
}
