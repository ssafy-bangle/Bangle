package com.bangle.domain.bookshelf.repository;

import com.bangle.domain.book.entity.QBook;
import com.bangle.domain.bookshelf.dto.BookshelfResponse;
import com.bangle.domain.bookshelf.entity.QBookshelf;
import com.bangle.domain.member.entity.Member;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
@Primary
public class BookshelfDetailRepositoryCustomImpl implements BookshelfDetailRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;

    QBook book = QBook.book;
    QBookshelf bookshelf = QBookshelf.bookshelf;

    @Override
    public List<BookshelfResponse> findBookshelfByMemberId(Long memberId) {
        return jpaQueryFactory.select(
                    Projections.constructor(BookshelfResponse.class, book.id, book.title, bookshelf.address, book.cover, bookshelf.readPages.divide(book.totalPages).multiply(100).as("progress")))
                .from(bookshelf)
                .join(book).on(bookshelf.book.id.eq(book.id))
                .where(bookshelf.member.id.eq(memberId))
                .fetch();
    }

}
