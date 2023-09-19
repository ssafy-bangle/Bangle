package com.bangle.domain.order.entity;

import com.bangle.domain.book.entity.Book;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder
public class OrderBook {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_book_id")
	private Long id;

	@JoinColumn(name = "book_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Book book;

	@JoinColumn(name = "order_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Order order;

	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;

	public static OrderBook createOrderBook(OrderStatus orderStatus, Book book) {
		return OrderBook.builder()
			.book(book)
			.orderStatus(orderStatus)
			.build();
	}

	public void addOrder(Order order) {
		this.order = order;
	}
}
