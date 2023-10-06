package com.bangle.domain.author.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bangle.domain.author.dto.AuthorDetailResponse;
import com.bangle.domain.author.dto.AuthorIntroductionRequest;
import com.bangle.domain.author.dto.AuthorResponse;
import com.bangle.domain.author.service.AuthorService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/authors")
public class AuthorController {

	private final AuthorService authorService;

	@GetMapping
	public ResponseEntity<?> getAuthorInfo(@AuthenticationPrincipal CustomMemberDetails member) {
		try {
			AuthorResponse authorResponse = authorService.getAuthorInfo(member.getPK());
			return BaseResponse.okWithData(HttpStatus.OK, "작가 회원정보 조회 완료", authorResponse);
		} catch (Exception e) {
			e.printStackTrace();
			return BaseResponse.fail(HttpStatus.UNAUTHORIZED, "작가 회원정보 조회 실패");
		}
	}

	@GetMapping("/{authorId}")
	public ResponseEntity<?> getAuthorDetail(@AuthenticationPrincipal CustomMemberDetails member,
		@PathVariable Long authorId) {
		try {
			AuthorDetailResponse authorDetailResponse = authorService.getAuthorDetail(member, authorId);
			return BaseResponse.okWithData(HttpStatus.OK, "작가 조회 완료", authorDetailResponse);
		} catch (IllegalArgumentException e) {
			return BaseResponse.fail(HttpStatus.BAD_REQUEST, "작가가 존재하지 않습니다");
		} catch (Exception e) {
			e.printStackTrace();
			return BaseResponse.fail(HttpStatus.BAD_REQUEST, "작가 조회 실패");
		}
	}

	@PostMapping
	public ResponseEntity<?> updateIntroduction(@AuthenticationPrincipal CustomMemberDetails memberDetails, @RequestBody
	AuthorIntroductionRequest introductionRequest) {
		authorService.updateIntroduce(memberDetails.getPK(), introductionRequest);
		return BaseResponse.ok(HttpStatus.OK, "소개 수정 완료");
	}
}
