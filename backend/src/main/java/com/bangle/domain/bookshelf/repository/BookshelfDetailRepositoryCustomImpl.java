package com.bangle.domain.bookshelf.repository;

import static com.bangle.domain.member.entity.QMember.*;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import com.bangle.domain.book.entity.QBook;
import com.bangle.domain.bookshelf.dto.BookshelfResponse;
import com.bangle.domain.bookshelf.entity.QBookshelf;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
@Primary
public class BookshelfDetailRepositoryCustomImpl implements BookshelfDetailRepositoryCustom {

	private final JPAQueryFactory jpaQueryFactory;

	QBook book = QBook.book;
	QBookshelf bookshelf = QBookshelf.bookshelf;

	@Override
	public List<BookshelfResponse> findBookshelfByMemberId(Long memberId) {
		return jpaQueryFactory.select(
				Projections.constructor(BookshelfResponse.class, book.id, book.title, bookshelf.address, book.cover,
					bookshelf.readPages.divide(book.totalPages).multiply(100).as("progress")))
			.from(bookshelf)
			.join(bookshelf.book, book)
			.join(bookshelf.member, member)
			.where(member.id.eq(memberId))
			.fetch();
	}

}
