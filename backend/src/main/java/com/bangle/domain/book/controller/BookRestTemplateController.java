package com.bangle.domain.book.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.service.BookRestTemplateService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/books/recommend")
public class BookRestTemplateController {

	private final BookRestTemplateService restTemplateService;

	@PostMapping("/genre")
	public ResponseEntity<?> getRecommendBooks(@AuthenticationPrincipal CustomMemberDetails member){
		return BaseResponse.okWithData(HttpStatus.OK,"추천 책들",restTemplateService.getRecommendBooks(member.getUsername()));
	}
}
