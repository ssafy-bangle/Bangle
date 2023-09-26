package com.bangle.domain.member.service;

import com.bangle.domain.member.dto.MemberStatus;
import com.bangle.domain.member.dto.OidcResponse;
import com.bangle.domain.member.entity.Member;
import com.bangle.global.auth.jwt.JwtPayloadDto;
import com.bangle.global.util.OidcUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.nio.charset.StandardCharsets;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
public class LoginService {

  private final RestTemplate restTemplate;
  private final OidcUtil oidcUtil;
  private final MemberService memberService;
  @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
  private String kakaoClientId;

  @Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
  private String kakaoClientSecret;

  @Value("${spring.backend.host}")
  private String backendHost;

  public OidcResponse getOidcToken(String code) {
    UriComponents uriComponents = UriComponentsBuilder.newInstance()
        .scheme("https")
        .host("kauth.kakao.com")
        .path("/oauth/token")
        .build();

    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(
        new MediaType("application", "x-www-form-urlencoded", StandardCharsets.UTF_8));
    MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
    body.add("grant_type", "authorization_code");
    body.add("client_id", kakaoClientId);
    body.add("redirect_uri", backendHoscat apt + "/login/oauth2/code/kakao");
    body.add("code", code);
    body.add("client_secret", kakaoClientSecret);

    HttpEntity<?> request = new HttpEntity<>(body, httpHeaders);
    try {
      return restTemplate.postForObject(uriComponents.toString(), request, OidcResponse.class);
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

  public String getMemberFromOidc(OidcResponse oidcResponse)
      throws NullPointerException, JsonProcessingException {
    JwtPayloadDto memberData = oidcUtil.decodeIdToken(oidcResponse.getIdToken());
    return memberData.getSub();
  }

  public MemberStatus getMemberStatus(String userId) {
    try {
      Member member = memberService.findByUserId(userId);
      if (member.getAuthor() != null) {
        return MemberStatus.AUTHOR;
      }
      return MemberStatus.READER;
    } catch (IllegalArgumentException e) {
      return MemberStatus.NEW;
    }
  }
}
