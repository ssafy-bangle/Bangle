package com.bangle.domain.order.service;

import java.io.IOException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.spec.InvalidKeySpecException;
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

	@Value("${wallet.public}")
	private String serverPublicKey;

	@Transactional
	public List<BookIdAddressResponse> order(String userId, OrderRequest order)
			throws NoSuchAlgorithmException, InvalidKeySpecException, NoSuchProviderException,
			InvalidKeyException, InvalidAlgorithmParameterException, NoSuchPaddingException,
			IllegalBlockSizeException, BadPaddingException, IOException {
		Member member = memberRepository.findByUserId(userId)
			.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자입니다."));
		List<Book> books = bookRepository.findAllById(order.books().stream()
			.map(OrderBookRequest::bookId)
			.toList());
		if (order.books().size() != books.size()) {
			throw new IllegalArgumentException("존재하지 않는 책입니다.");
		}

		List<OrderBook> orderBooks = new ArrayList<>();
		List<Bookshelf> bookshelf = new ArrayList<>();
		int totalDust = 0;
		for (int i = 0; i < books.size(); i++) {
			Book book = books.get(i);
			OrderStatus orderStatus = order.books().get(i).orderStatus();
			totalDust += book.getPrice(orderStatus);
			orderBooks.add(OrderBook.createOrderBook(orderStatus, book));
			bookshelf.add(Bookshelf.createBookShelf(member, book, orderStatus));
		}
		Order newOrder = Order.createOrder(member, orderBooks, totalDust);

		for (Bookshelf book: bookshelf) {
			// get SERVER's ipfs epub file
			byte[] encryptedServerEpub = ipfsService.downloadServerFileOf(book.getBook().getId());
			// derive AES key from SERVER's public key
			SecretKey serverSecretKey = CryptoUtil.deriveAESbyPBKDF(serverPublicKey);
			// decrypt
			byte[] decryptedServerEpub = CryptoUtil.decryptBook(serverSecretKey, encryptedServerEpub);
			// derive AES key from MEMBER's public key
			SecretKey memberSecretKey = CryptoUtil.deriveAESbyPBKDF(member.getPublicKey());
			// re-encrypt with MEMBER's public key
			byte[] encryptedMemberBook = CryptoUtil.encryptBook(memberSecretKey, decryptedServerEpub);
			// upload to ipfs
			IpfsResponse upload = ipfsService.upload(encryptedMemberBook);
			// add address to bookshelf entity
			book.setIpfsAddress(upload.getAddress());
		}

		orderRepository.save(newOrder);
		bookshelfRepository.saveAll(bookshelf);
		// book id 오름차순으로 정렬하고 {bookid, address} 반환
		return bookshelf.stream().sorted().map(BookIdAddressResponse::new).toList();
	}
}
