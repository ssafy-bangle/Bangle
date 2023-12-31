package com.bangle.domain.member.controller;

import java.time.Duration;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import java.util.Optional;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bangle.domain.member.dto.InterestRequest;
import com.bangle.domain.member.dto.JoinRequest;
import com.bangle.domain.member.dto.MemberResponse;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.service.MemberService;
import com.bangle.global.auth.jwt.JwtPayloadDto;
import com.bangle.global.auth.oauth.oidc.publickey.KakaoPublicKeyService;
import com.bangle.global.auth.oauth.oidc.publickey.PublicKeyRepository;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;
import com.bangle.global.util.JwtTokenUtil;
import com.bangle.global.util.OidcUtil;
import com.fasterxml.jackson.core.JsonProcessingException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/members")
public class MemberController {
	private final KakaoPublicKeyService kakaoPublicKeyService;
	private final PublicKeyRepository publicKeyRepository;
	private final OidcUtil oidcUtil;
	private final MemberService memberService;
	private final PasswordEncoder passwordEncoder;
	private final RedisTemplate<String, String> template;

	@PostMapping("/login/kakao")
	public ResponseEntity<?> oidcLogin(@RequestHeader("Authorization") String idToken) {
		try {
			JwtPayloadDto memberData = oidcUtil.decodeIdToken(idToken);
			log.info("kakao login data = {}", memberData);
			Optional<Member> optionalMember = memberService.getOptionalByUserId(memberData.getSub());
			Member member = optionalMember.orElse(Member.builder()
				.userId(memberData.getSub())
				.nickname(memberData.getNickname())
				.email(memberData.getEmail())
				.dust(0)
				.roles("ROLE_USER")
				.provider("KAKAO")
				.build());

			boolean isNewMember = optionalMember.isEmpty();
			if (isNewMember) {
				memberService.save(member);
			}
			Map<String, Object> tokens = new LinkedHashMap<>();
			tokens.put("memberInformation", new MemberResponse(member));
			tokens.put("accessToken", JwtTokenUtil.getAccessToken(member.getUserId()));
			tokens.put("refreshToken", JwtTokenUtil.getRefreshToken(member.getUserId()));
			tokens.put("needPublicKey", isNewMember || member.getPublicKey() == null);
			//Redis에 20일 동안 저장
			template.opsForValue()
				.set("refresh " + member.getUserId(), (String)tokens.get("refreshToken"), Duration.ofDays(20));
			return BaseResponse.okWithData(HttpStatus.OK, "login Success", tokens);

		} catch (JsonProcessingException e) {
			return BaseResponse.fail(HttpStatus.UNAUTHORIZED, "id_token is not valid");
		}
	}

	@PostMapping()
	public ResponseEntity<?> signUp(
		@AuthenticationPrincipal CustomMemberDetails memberDetails,
		@RequestBody JoinRequest joinForm) {
		MemberResponse memberResponse = memberService.join(memberDetails.getUsername(), joinForm);
		return BaseResponse.okWithData(HttpStatus.OK, "회원가입 완료", memberResponse);
	}

	@PutMapping
	public ResponseEntity<?> changeNickname(
		@AuthenticationPrincipal CustomMemberDetails memberDetails,
		@RequestBody HashMap<String, String> map) {
		if (!map.containsKey("nickname")) {
			return BaseResponse.fail(HttpStatus.BAD_REQUEST, "잘못된 요청입니다.");
		}
		String nickname = map.get("nickname");
		memberService.changeNickname(memberDetails.getUsername(), nickname);
		return BaseResponse.okWithData(HttpStatus.OK, "닉네임 변경 완료", nickname);
	}

	@GetMapping
	public ResponseEntity<?> getInfo(@AuthenticationPrincipal CustomMemberDetails member) {

		try {
			MemberResponse memberResponse = memberService.memberInfo(member.getUsername());
			return BaseResponse.okWithData(HttpStatus.OK, "회원정보 조회 완료", memberResponse);
		} catch (Exception e) {
			e.printStackTrace();
			return BaseResponse.fail(HttpStatus.UNAUTHORIZED, "회원정보 조회 실패");
		}
	}

	@PutMapping("/register")
	public ResponseEntity<?> registerAuthor(@AuthenticationPrincipal CustomMemberDetails member) {

		try {
			if (memberService.registerAuthor(member.getPK())) {
				return BaseResponse.ok(HttpStatus.OK, "작가 전환 완료");
			}
			return BaseResponse.fail(HttpStatus.BAD_REQUEST, "이미 전환된 작가");
		} catch (Exception e) {
			e.printStackTrace();
			return BaseResponse.fail(HttpStatus.BAD_REQUEST, "작가 전환 실패");
		}
	}

	@PostMapping("/interests")
	public ResponseEntity<?> saveInterestGenre(@AuthenticationPrincipal CustomMemberDetails memberDetails, @RequestBody
	InterestRequest interestRequest) {
		memberService.saveInterest(memberDetails.getPK(), interestRequest);
		return BaseResponse.ok(HttpStatus.OK, "추천 정보 저장 완료");
	}

	@GetMapping("/interests")
	public ResponseEntity<?> getInterests(@AuthenticationPrincipal CustomMemberDetails memberDetails){
		Map<?, ?> bookByInterest = memberService.getBookByInterest(memberDetails.getPK());
		return BaseResponse.okWithData(HttpStatus.OK,"장르 별 추천 조회",bookByInterest);
	}
}
