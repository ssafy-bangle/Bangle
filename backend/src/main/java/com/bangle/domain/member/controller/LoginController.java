package com.bangle.domain.member.controller;

import java.time.Duration;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.bangle.domain.member.dto.OidcResponse;
import com.bangle.domain.member.service.LoginService;
import com.bangle.global.response.BaseResponse;
import com.bangle.global.util.JwtTokenUtil;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
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

  private final LoginService loginService;

  @Value("${spring.frontend.scheme}")
  private String frontScheme;

  @Value("${spring.frontend.host}")
  private String frontHost;

  private final RedisTemplate<String,String> template;

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

  @PostMapping("/reissue")
  public ResponseEntity<?> reissueAccessToken(@RequestHeader("Authorization") String token) {
    DecodedJWT decodedJwt = null;
    final Map<String, Object> body = new LinkedHashMap<>();
    try {
      decodedJwt = JwtTokenUtil.handleError(token);
    } catch (Exception ex) {
      body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
      body.put("error", "Unauthorized");
      body.put("message", ex.getMessage());
      return ResponseEntity.status(498).body(body);
    }

    String userId = decodedJwt.getSubject();
    Date expiresAt = decodedJwt.getExpiresAt();
    System.out.println(userId);
    String dbToken = template.opsForValue().get("refresh " + userId);

    String reissuedRefreshToken = null;
    String reissuedAccessToken = JwtTokenUtil.getAccessToken(userId);

    if (dbToken.equals(token.replace(JwtTokenUtil.TOKEN_PREFIX, ""))) {

      //refresh token 만료가 2일 이내라면 재발급
      if (expiresAt.getTime() - new Date().getTime() < JwtTokenUtil.TWO_DAYS) {
        reissuedRefreshToken = JwtTokenUtil.getRefreshToken(userId);
        template.opsForValue().set
            (
                "refresh " + userId,
                reissuedRefreshToken,
                Duration.ofDays(20)
            );
      }
      body.put("access-token", reissuedAccessToken);
      body.put("refresh-token", reissuedRefreshToken);

      return BaseResponse.okWithData(HttpStatus.OK, "Token Reissuance Successful", body);
    }
    return BaseResponse.fail( HttpStatus.INSUFFICIENT_SPACE_ON_RESOURCE,"Expired token, login again!");
  }

}
