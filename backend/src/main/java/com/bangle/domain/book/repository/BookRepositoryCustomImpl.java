package com.bangle.domain.book.repository;

import static com.bangle.domain.book.entity.QBook.*;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import com.bangle.domain.book.dto.BookResponse;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class BookRepositoryCustomImpl implements BookRepositoryCustom {

	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public Page<BookResponse> findAllByTitleContainsKeywordForSearch(String keyword, Pageable pageable) {

		List<BookResponse> books = jpaQueryFactory.select(
				Projections.constructor(BookResponse.class, book.title, book.genre, book.purchasePrice, book.rentalPrice,
					book.averageScore, book.cover))
			.from(book)
			.where(book.title.contains(keyword))
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetch();

		JPAQuery<Long> countQuery = jpaQueryFactory.select(book.count())
			.from(book)
			.where(book.title.contains(keyword));

		return PageableExecutionUtils.getPage(books, pageable, countQuery::fetchOne);
	}

}
