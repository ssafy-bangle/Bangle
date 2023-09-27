package com.bangle.domain.order.service;

import java.util.ArrayList;
import java.util.List;

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

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {

	private final MemberRepository memberRepository;
	private final BookRepository bookRepository;
	private final OrderRepository orderRepository;
	private final BookshelfRepository bookshelfRepository;
	private final RedisTemplate<String, String> template;

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
		}
		Order newOrder = Order.createOrder(member, orderBooks, totalDust);

		orderRepository.save(newOrder);
		bookshelfRepository.saveAll(bookshelf);
	}
}
