package com.bangle.domain.order.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;

import org.bouncycastle.util.encoders.Hex;
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

	public IpfsResponse upload(RegisterRequest registerRequest, String userPublicKeyHex) {
		try {
			// decode user public key
			byte[] decodedUserPublicKey = Hex.decode(userPublicKeyHex);

			// generate shared secret
			String sharedSecret = CryptoUtil.generateSharedSecret(decodedUserPublicKey);

			// generate AES key from shared secret by PK
			byte[] salt = Arrays.copyOfRange(decodedUserPublicKey, 0, 16);
			SecretKey secretAesKey = CryptoUtil.createSecretKeyFromSharedSecret(sharedSecret, salt, 1000);

			// encrypt book
			byte[] encryptedBook = CryptoUtil
				.encryptBook(secretAesKey, CryptoUtil.generateIv(), registerRequest.getBook().getBytes());

			// upload to IPFS
			HttpHeaders header = new HttpHeaders();
			header.setContentType(MediaType.MULTIPART_FORM_DATA);
			LinkedMultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
			body.add("file", encryptedBook);
			UriComponents uriComponents = UriComponentsBuilder.newInstance()
				.scheme("http")
				.host(kuboRpcHost)
				.path("/api/v0/add")
				.build();

			KuboAddResponse kuboAddResponse = restTemplate.postForObject(
				uriComponents.toString(), new HttpEntity<>(body, header), KuboAddResponse.class
			);

			if (kuboAddResponse == null) {
				throw new NullPointerException("ipfs address is null");
			}
			return new IpfsResponse(sharedSecret, kuboAddResponse.getHash());
		} catch (Exception e) {
			System.out.println(e);
			e.printStackTrace();
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
