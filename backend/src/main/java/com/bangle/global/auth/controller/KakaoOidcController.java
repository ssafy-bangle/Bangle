package com.bangle.global.auth.controller;

import java.time.Duration;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.service.MemberService;
import com.bangle.global.auth.jwt.JwtPayloadDto;
import com.bangle.global.auth.oauth.oidc.publickey.KakaoPublicKeyService;
import com.bangle.global.auth.oauth.oidc.publickey.PublicKeyRepository;
import com.bangle.global.response.BaseResponse;
import com.bangle.global.util.JwtTokenUtil;
import com.bangle.global.util.OidcUtil;
import com.fasterxml.jackson.core.JsonProcessingException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/users/login/kakao")
public class KakaoOidcController {
	private final KakaoPublicKeyService kakaoPublicKeyService;
	private final PublicKeyRepository publicKeyRepository;
	private final OidcUtil oidcUtil;
	private final MemberService memberService;
	private final PasswordEncoder passwordEncoder;
	private final RedisTemplate<String, String> template;

	@PostMapping
	public ResponseEntity<?> oidcLogin(@RequestHeader("Authorization") String idToken) {
		JwtPayloadDto memberData;
		try {
			memberData = oidcUtil.decodeIdToken(idToken);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
		log.info("kakao login data = {}", memberData);
		log.info("kakao picture = {}", memberData.getPicture());
		Optional<Member> optionalMember = memberService.findByUserId(memberData.getSub());
		Member newMember;
		String memberStatus = "EXIST_MEMBER";
		if (optionalMember.isEmpty()) {
			memberStatus = "NEW_MEMBER";
			newMember = Member.builder()
				.userId(memberData.getSub())
				.nickname(memberData.getNickname())
				.email(memberData.getEmail())
				.dust(0)
                .roles("ROLE_USER")
				.provider("KAKAO")
				.build();
			memberService.save(newMember);
			optionalMember = memberService.findByUserId(memberData.getSub());
		}

		String userId = optionalMember.get().getUserId();

		// 유효한 패스워드가 맞는 경우, 로그인 성공으로 응답.(액세스 토큰을 포함하여 응답값 전달)
		Map<String, Object> tokens = new LinkedHashMap<>();
		tokens.put("member-information", optionalMember.get());
		tokens.put("access-token", JwtTokenUtil.getAccessToken(userId));
		tokens.put("refresh-token", JwtTokenUtil.getRefreshToken(userId));
		tokens.put("member-status", memberStatus);
		//Redis에 20일 동안 저장
		template.opsForValue().set("refresh " + userId, (String)tokens.get("refresh-token"), Duration.ofDays(20));

		return BaseResponse.okWithData(HttpStatus.OK, "login Success", tokens);
	}
}
