package com.bangle.domain.review.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bangle.domain.review.dto.ReviewRequest;
import com.bangle.domain.review.service.ReviewService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ReviewController {
	private final ReviewService reviewService;

	@PostMapping("/api/books/review")
	public ResponseEntity<?> writeReview(@AuthenticationPrincipal CustomMemberDetails member,
										@RequestBody ReviewRequest request){
		try {
			reviewService.writeReview(request, member.getUsername());
			return BaseResponse.ok(HttpStatus.OK, "리뷰 작성 성공");
		} catch (NullPointerException e) {
			e.printStackTrace();
			return BaseResponse.fail(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@DeleteMapping("/api/books/review/{reviewId}")
	public ResponseEntity<?> deleteReview(@AuthenticationPrincipal CustomMemberDetails member,
										  @PathVariable Long reviewId){
		reviewService.deleteReview(member.getUsername(), reviewId);
		return BaseResponse.ok(HttpStatus.OK, "잠시만");
	}

}
