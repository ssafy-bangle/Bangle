package com.bangle.domain.review.service;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.member.repository.MemberRepository;
import com.bangle.domain.review.dto.ReviewRequest;
import com.bangle.domain.review.entity.Review;
import com.bangle.domain.review.repository.ReviewRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewService {
	private final ReviewRepository reviewRepository;
	private final MemberRepository memberRepository;
	private final BookRepository bookRepository;
	private final AwsS3Service awsS3Service;
	private final RedisTemplate<String, String> template;

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
		String key = "bookId:" + request.bookId() + ":today_reviews";
		String today_reviews = template.opsForValue().get(key);
		if (today_reviews == null) {
			template.opsForValue().set(key, "1");
		} else {
			template.opsForValue().set(key, Long.parseLong(today_reviews) + 1L + "");
		}
	}

	@Transactional
	public void deleteReview(String userId, Long reviewId){
		// 이미지 삭제 먼저
		awsS3Service.deleteImage(reviewRepository.findById(reviewId)
			.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 리뷰"))
			.getCover()
			.substring(47));
		// 리뷰 삭제
		reviewRepository.deleteById(reviewId);
	}

}
