package com.bangle.domain.review.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
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
										ReviewRequest request,
										@RequestPart MultipartFile cover){
		reviewService.writeReview(request, cover, member.getUsername());
		return BaseResponse.ok(HttpStatus.OK, "리뷰 작성 성공");
	}
}
