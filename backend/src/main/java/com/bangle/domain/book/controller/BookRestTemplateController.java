package com.bangle.domain.book.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.service.BookRestTemplateService;
import com.bangle.global.auth.security.CustomMemberDetails;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/books/recommend")
public class BookRestTemplateController {

	private final BookRestTemplateService restTemplateService;

	@PostMapping("/genre")
	public List<BookResponse> getRecommendBooks(@AuthenticationPrincipal CustomMemberDetails member){
		return restTemplateService.getRecommendBooks(member.getUsername());
	}
}
