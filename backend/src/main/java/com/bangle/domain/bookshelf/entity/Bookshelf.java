package com.bangle.domain.bookshelf.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.bangle.domain.book.entity.Book;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.order.dto.OrderBookRequest;
import com.bangle.domain.order.entity.OrderStatus;

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
public class Bookshelf {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bookshelf_id")
	private Long id;

	@JoinColumn(name = "book_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Book book;

	@JoinColumn(name = "member_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Member member;

	private String address;

	@Column(name = "read_pages")
	private int readPages;

	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;

	private LocalDateTime createdTime;

	// public static List<Bookshelf> createBookShelfList(Member member, List<Book> books,
	// 	List<OrderBookRequest> orderBooks) {
	// 	List<Bookshelf> bookshelfList = new ArrayList<>();
	// 	books.forEach(book -> bookshelfList.add(createBookShelf(member, book, orderStatus)));
	// 	return bookshelfList;
	// }

	public static Bookshelf createBookShelf(Member member, Book book, OrderStatus orderStatus) {
		return Bookshelf.builder()
			.member(member)
			.book(book)
			.readPages(0)
			.orderStatus(orderStatus)
			.createdTime(LocalDateTime.now())
			.address("어드레스 넣는 곳")
			.build();
	}
}
