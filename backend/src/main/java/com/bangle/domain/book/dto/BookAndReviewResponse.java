package com.bangle.domain.book.dto;

import java.util.ArrayList;
import java.util.List;

import com.bangle.domain.review.dto.ReviewResponse;
import com.bangle.domain.review.entity.Review;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookAndReviewResponse {

	private BookDetailResponse bookDetail;
	private boolean isBuy;
	private List<ReviewResponse> reviews;

	public static BookAndReviewResponse create(BookDetailResponse bookDetailResponse, Long countQuery, ArrayList<ReviewResponse> reviews) {
		return BookAndReviewResponse.builder()
			.bookDetail(bookDetailResponse)
			.isBuy(countQuery != null && countQuery > 0)
			.reviews(reviews)
			.build();

	}

	public void addReview(List<Review> reviews) {
		List<ReviewResponse> reviewResponse = new ArrayList<>();
		reviews.forEach(review -> reviewResponse.add(review.toResponse()));
		this.reviews = reviewResponse;
	}
}
