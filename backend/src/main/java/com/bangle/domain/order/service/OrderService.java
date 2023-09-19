package com.bangle.domain.order.service;

import java.util.ArrayList;
import java.util.List;

import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.bookshelf.entity.Bookshelf;
import com.bangle.domain.bookshelf.repository.BookshelfRepository;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.repository.MemberRepository;
import com.bangle.domain.order.dto.IpfsResponse;
import com.bangle.domain.order.dto.KuboAddResponse;
import com.bangle.domain.order.dto.OrderBookRequest;
import com.bangle.domain.order.dto.OrderRequest;
import com.bangle.domain.order.dto.RegisterRequest;
import com.bangle.domain.order.entity.Order;
import com.bangle.domain.order.entity.OrderBook;
import com.bangle.domain.order.entity.OrderStatus;
import com.bangle.domain.order.repository.OrderRepository;
import com.bangle.global.util.CryptoUtil;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {

	private final RestTemplate restTemplate;
	private final MemberRepository memberRepository;
	private final BookRepository bookRepository;
	private final OrderRepository orderRepository;
	private final BookshelfRepository bookshelfRepository;

	@Value("${kubo.rpc.host}")
	private String kuboRpcHost;

	public IpfsResponse upload(RegisterRequest registerRequest, String publicKeyHex) {
		try {
			// encrypt book
			SecretKey secretAesKey = CryptoUtil.createSecretKey();
			IvParameterSpec iv = CryptoUtil.generateIv();
			byte[] encryptedBook = CryptoUtil
				.encryptBook(secretAesKey, iv, registerRequest.getBook().getBytes());

			// encrypt AES secretKey with member's public key
			// not working yet
			String encryptedKeyHex = CryptoUtil.encryptAesKey(publicKeyHex, secretAesKey);

			// make encryptedBook to file, use docker volume to make spring & kubo use same file path
			//      Path filepath = Paths.get("./books/testbook.epub"); // need to make path unique to file
			//      Files.write(filepath, encryptedBook);
			//      System.out.println("filepath: " + filepath);

			// upload to IPFS
			// header
			HttpHeaders header = new HttpHeaders();
			header.setContentType(MediaType.MULTIPART_FORM_DATA);
			// body
			LinkedMultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
			body.add("file", encryptedBook);
			// Uri
			UriComponents uriComponents = UriComponentsBuilder.newInstance()
				.scheme("http")
				.host(kuboRpcHost)
				.path("/api/v0/add")
				.build();

			KuboAddResponse kuboAddResponse = restTemplate.postForObject(
				uriComponents.toString(), new HttpEntity<>(body, header), KuboAddResponse.class);
			if (kuboAddResponse != null) {
				return new IpfsResponse(encryptedKeyHex, kuboAddResponse.getHash());
			} else {
				return new IpfsResponse("", "");
			}
		} catch (Exception e) {
			System.out.println(e);
			return new IpfsResponse("", "");
		}
	}

	@Transactional
	public void order(String userId, OrderRequest order) {
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

		orderRepository.save(newOrder);
		bookshelfRepository.saveAll(bookshelf);
	}
}
