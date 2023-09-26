package com.bangle.domain.book.repository;

import static com.bangle.domain.book.entity.QBook.*;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.entity.QBook;
import com.bangle.domain.member.entity.QMember;
import com.bangle.domain.order.entity.QOrder;
import com.bangle.domain.order.entity.QOrderBook;
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
				Projections.constructor(BookResponse.class, book.title, book.genre, book.purchasePrice, book.rentalPrice,
					book.averageScore, book.cover))
			.from(book)
			.where(book.title.contains(keyword),
				book.genre.eq(category))
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetch();

		JPAQuery<Long> countQuery = jpaQueryFactory.select(book.count())
			.from(book)
			.where(book.title.contains(keyword),
				book.genre.eq(category));

		return PageableExecutionUtils.getPage(books, pageable, countQuery::fetchOne);
	}

	@Override
	public List<String> getGenres(String userId) {
		return jpaQueryFactory
			.select(book.genre)
			.from(member)
			.join(order).on(member.id.eq(order.member.id))
			.join(orderBook).on(order.id.eq(orderBook.order.id))
			.join(book).on(orderBook.book.eq(book))
			.where(member.userId.eq(userId))
			.fetch();
	}

}
