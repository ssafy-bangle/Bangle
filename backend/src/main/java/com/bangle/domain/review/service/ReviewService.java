package com.bangle.domain.review.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.member.repository.MemberRepository;
import com.bangle.domain.review.dto.ReviewRequest;
import com.bangle.domain.review.entity.Review;
import com.bangle.domain.review.repository.ReviewRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewService {
	private final ReviewRepository reviewRepository;
	private final MemberRepository memberRepository;
	private final BookRepository bookRepository;
	private final AwsS3Service awsS3Service;

	public void writeReview(ReviewRequest request, MultipartFile cover, String userId){
		reviewRepository.save(Review.builder()
			.member(memberRepository.findByUserId(userId)
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자")))
			.book(bookRepository.findById(request.bookId())
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 책")))
			.content(request.content())
			.score(request.score())
			.cover(awsS3Service.uploadImageToS3(cover))
			.build());
	}

}
