package com.bangle.domain.review.repository;

import com.bangle.domain.review.dto.ReviewDetailResponse;

public interface ReviewRepositoryCustom {
	ReviewDetailResponse getReviewDetailByReviewId(Long reviewId);
}
