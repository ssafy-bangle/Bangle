package com.bangle.domain.follow.controller;

import com.bangle.domain.author.dto.AuthorSearchResponse;
import com.bangle.domain.follow.service.FollowService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/readers/subscribe")
public class FollowController {

	private final FollowService followService;

	@PostMapping("/{authorId}")
	public ResponseEntity<?> follow(@AuthenticationPrincipal CustomMemberDetails member, @PathVariable long authorId) {

		Long memberId = member.getPK();

		if (followService.follow(memberId, authorId)) {
			return BaseResponse.ok(HttpStatus.OK, "follow Success");
		}

		return BaseResponse.fail(HttpStatus.OK, "follow failure");
	}

	@GetMapping("/list")
	public ResponseEntity<?> list(@AuthenticationPrincipal CustomMemberDetails member) {

		Long memberId = member.getPK();

		List<AuthorSearchResponse> authorSearchResponses = followService.list(memberId);

		return BaseResponse.okWithData(HttpStatus.OK, "follow list Success", authorSearchResponses);
	}
}
