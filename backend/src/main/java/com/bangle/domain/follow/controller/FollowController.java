package com.bangle.domain.follow.controller;

import com.bangle.domain.follow.service.FollowService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/readers/subscribe")
public class FollowController {

	private final FollowService followService;

	@PostMapping("/{authorId}")
	public ResponseEntity<?> follow(@AuthenticationPrincipal CustomMemberDetails member, @PathVariable long authorId) {

		String userId = member.getUsername();

		if (followService.follow(userId, authorId)) {
			return BaseResponse.ok(HttpStatus.OK, "follow Success");
		} else {
			return BaseResponse.fail("follow Fail", 200);
		}


	}
}
