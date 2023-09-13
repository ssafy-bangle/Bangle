package com.bangle.domain.member.controller;

import com.bangle.domain.member.dto.MemberStatus;
import com.bangle.domain.member.dto.OidcResponse;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.service.LoginService;
import com.bangle.global.response.BaseResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/login")
public class LoginController {

  private final LoginService loginService;

  @Value("${spring.frontend.scheme}")
  private String frontScheme;

  @Value("${spring.frontend.host}")
  private String frontHost;

  @GetMapping("/oauth2/code/kakao")
  public ResponseEntity<?> KakaoLoginCallback(@RequestParam String code) {
    try {
      OidcResponse oidcResponse = loginService.getOidcToken(code);
      HttpHeaders httpHeaders = new HttpHeaders();
      UriComponents uriComponents = UriComponentsBuilder.newInstance()
          .scheme(frontScheme)
          .host(frontHost)
          .path("/info")
          .queryParam("id_token", oidcResponse.getIdToken())
          .build();
      httpHeaders.setContentType(MediaType.APPLICATION_JSON);
      httpHeaders.add("Location", uriComponents.toString());
      return BaseResponse.okWithHeaders(HttpStatus.FOUND, "redirect to page", httpHeaders);
    } catch (Exception e) {
      System.out.println(e);
      return BaseResponse.fail(HttpStatus.UNAUTHORIZED, "failure at kakao callback");
    }
  }
}
