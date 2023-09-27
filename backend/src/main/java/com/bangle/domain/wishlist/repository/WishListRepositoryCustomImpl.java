package com.bangle.domain.wishlist.repository;

import static com.bangle.domain.book.entity.QBook.*;
import static com.bangle.domain.member.entity.QMember.*;
import static com.bangle.domain.wishlist.entity.QWishList.*;

import java.util.List;

import com.bangle.domain.book.dto.BookResponse;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class WishListRepositoryCustomImpl implements WishListRepositoryCustom {

	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public List<BookResponse> findAllWishListByMember(Long memberId) {
		return jpaQueryFactory.select(Projections.constructor(BookResponse.class, book.id, book.title, book.cover))
			.from(wishList)
			.join(wishList.member, member)
			.join(wishList.book, book)
			.where(member.id.eq(memberId),
				wishList.delete.eq(Boolean.FALSE))
			.fetch();
	}
}
