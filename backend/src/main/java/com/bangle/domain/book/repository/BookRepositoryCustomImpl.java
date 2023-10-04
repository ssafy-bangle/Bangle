package com.bangle.domain.book.repository;

import static com.bangle.domain.author.entity.QAuthor.*;
import static com.bangle.domain.book.entity.QBook.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import com.bangle.domain.book.dto.BookAndReviewResponse;
import com.bangle.domain.book.dto.BookDetailResponse;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.entity.Book;

import com.bangle.domain.member.entity.QMember;
import com.bangle.domain.order.entity.QOrder;
import com.bangle.domain.order.entity.QOrderBook;

import com.bangle.global.auth.security.CustomMemberDetails;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class BookRepositoryCustomImpl implements BookRepositoryCustom {

	private final JPAQueryFactory jpaQueryFactory;
	QMember member = QMember.member;
	QOrder order = QOrder.order;
	QOrderBook orderBook = QOrderBook.orderBook;

	@Override
	public Page<BookResponse> findAllByTitleContainsKeywordForSearch(String keyword,String category, Pageable pageable) {

		List<BookResponse> books = jpaQueryFactory.select(
				Projections.constructor(BookResponse.class,book.id, book.title, book.genre, book.purchasePrice, book.rentalPrice,
					book.averageScore, book.cover))
			.from(book)
			.where(book.title.toLowerCase().contains(keyword.toLowerCase()),
				book.genre.contains(category))
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetch();

		JPAQuery<Long> countQuery = jpaQueryFactory.select(book.count())
			.from(book)
			.where(book.title.toLowerCase().contains(keyword.toLowerCase()),
				book.genre.contains(category));

		return PageableExecutionUtils.getPage(books, pageable, countQuery::fetchOne);
	}

	@Override
	public List<String> getIntro(String userId) {
		return jpaQueryFactory
			.select(book.introduction)
			.from(member)
			.join(order).on(member.id.eq(order.member.id))
			.join(orderBook).on(order.id.eq(orderBook.order.id))
			.join(book).on(orderBook.book.eq(book))
			.where(member.userId.eq(userId))
			.fetch();
	}

	@Override
	public List<Book> getBooks(String userId) {
		return jpaQueryFactory
			.select(book)
			.from(member)
			.join(order).on(member.id.eq(order.member.id))
			.join(orderBook).on(order.id.eq(orderBook.order.id))
			.join(book).on(orderBook.book.eq(book))
			.where(member.userId.eq(userId))
			.fetch();
	}

	@Override
	public BookAndReviewResponse findDetailBookByIdAndMember(CustomMemberDetails memberDetails, long id) {
		Long countQuery = 0L;
		if (memberDetails != null) {
			countQuery = jpaQueryFactory.select(orderBook.count())
				.from(order)
				.join(order.member, member)
				.join(order.orderItems, orderBook)
				.join(orderBook.book, book)
				.where(member.id.eq(memberDetails.getPK()),
					book.id.eq(id)).fetchOne();
		}
		BookDetailResponse bookDetailResponse = jpaQueryFactory.select(
				Projections.constructor(BookDetailResponse.class, book.id, book.title, book.cover, book.purchasePrice,
					book.rentalPrice, book.averageScore, book.address, book.genre, member.nickname,book.publicationDate,author.id))
			.from(book)
			.join(book.author, author)
			.join(author.member, member)
			.where(book.id.eq(id)).fetchOne();

		return BookAndReviewResponse.create(bookDetailResponse,countQuery,new ArrayList<>());
	}

	@Override
	public List<BookResponse> findAllByGenre(String interest) {
		return jpaQueryFactory.select(
				Projections.constructor(BookResponse.class, book.id, book.title, book.genre, book.purchasePrice,
					book.rentalPrice,
					book.averageScore, book.cover))
			.from(book)
			.join(book.author, author)
			.join(author.member, member)
			.where(book.genre.eq(interest))
			.limit(12)
			.fetch();
	}

}
