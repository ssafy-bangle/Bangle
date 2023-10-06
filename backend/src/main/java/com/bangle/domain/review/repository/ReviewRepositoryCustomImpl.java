package com.bangle.domain.review.repository;

import static com.bangle.domain.book.entity.QBook.*;
import static com.bangle.domain.member.entity.QMember.*;
import static com.bangle.domain.review.entity.QReview.*;

import com.bangle.domain.book.entity.QBook;
import com.bangle.domain.member.entity.QMember;
import com.bangle.domain.review.dto.ReviewDetailResponse;
import com.bangle.domain.review.entity.QReview;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ReviewRepositoryCustomImpl implements ReviewRepositoryCustom {

	private final JPAQueryFactory jpaQueryFactory;

	@Override
	public ReviewDetailResponse getReviewDetailByReviewId(Long reviewId) {
		return jpaQueryFactory.select(Projections.constructor(ReviewDetailResponse.class,review.id,review.content,review.score,review.cover,review.createdTime,member.nickname,book.title,book.genre))
			.from(review)
			.join(review.book, book)
			.join(review.member, member)
			.where(review.id.eq(reviewId))
			.fetchOne();
	}
}
