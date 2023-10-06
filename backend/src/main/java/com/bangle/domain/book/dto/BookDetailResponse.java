package com.bangle.domain.book.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.bangle.domain.review.dto.ReviewResponse;
import com.bangle.domain.review.entity.Review;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookDetailResponse {

	private long id;
	private String title;
	private String cover;
	private int purchasePrice;
	private int rentalPrice;
	private float averageScore;
	private String address;
	private String genre;
	private String nickname;
	private String introduction;
	private LocalDateTime publicationDate;
	private long authorId;


}
