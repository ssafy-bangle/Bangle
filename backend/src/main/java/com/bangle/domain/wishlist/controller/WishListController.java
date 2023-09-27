package com.bangle.domain.wishlist.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bangle.domain.wishlist.service.WishListService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/wishlist")
public class WishListController {

	private final WishListService wishListService;

	@GetMapping
	public ResponseEntity<?> getWishList(@AuthenticationPrincipal CustomMemberDetails memberDetails) {

		return BaseResponse.okWithData(HttpStatus.OK, "책 찜 정보", wishListService.getWishList(memberDetails.getPK()));
	}

	@PostMapping("/{id}")
	public ResponseEntity<?> wishBook(@AuthenticationPrincipal CustomMemberDetails memberDetails,
		@PathVariable Long id) {
		wishListService.wish(memberDetails.getPK(), id);
		return BaseResponse.ok(HttpStatus.OK, "책 찜 완료");
	}

}
