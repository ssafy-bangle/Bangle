package com.bangle.domain.member.controller;

import com.bangle.domain.member.dto.OicdResponse;
import com.bangle.global.response.BaseResponse;
import com.fasterxml.jackson.databind.ser.Serializers.Base;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/login")
public class LoginController {

  private final RestTemplate restTemplate;
  @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
  private String kakaoClientId;

  @Value("${spring.bangle.host}")
  private String bangleHost;

  @GetMapping("/oauth2/code/kakao")
  public ResponseEntity<?> KakaoLoginCallback(@RequestParam String code) {
    UriComponents uriComponents = UriComponentsBuilder.newInstance()
        .scheme("https")
        .host("kauth.kakao.com")
        .path("/oauth/token")
        .queryParam("grant_type", "authorization_code")
        .queryParam("client_id", kakaoClientId)
        .queryParam("redirect_uri", bangleHost + "/login/oauth2/code/kakao")
        .queryParam("code", code)
        .build();

    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(
        new MediaType("application", "x-www-form-urlencoded", StandardCharsets.UTF_8));

    OicdResponse oicdResponse = restTemplate.postForObject(uriComponents.toString(),
        new HttpEntity<>(httpHeaders), OicdResponse.class);
    // do something with oicdResponse
    // or send it to front to save token
    // need redirect
    try {
      return BaseResponse.okWithData(HttpStatus.OK, "get oicd_token successful", oicdResponse.getIdToken());
    } catch (NullPointerException e) {
      return BaseResponse.fail(HttpStatus.UNAUTHORIZED, "oicd_token is null");
    }
  }
}
