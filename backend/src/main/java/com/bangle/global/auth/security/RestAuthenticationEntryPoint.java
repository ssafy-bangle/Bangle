package com.bangle.global.auth.security;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.auth0.jwt.exceptions.TokenExpiredException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Value("${spring.backend.host}")
    private String backendHost;
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws
            IOException {

        log.info("entrypoint start");
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        final Map<String, Object> body = new LinkedHashMap<>();

        Object expiredException = request.getAttribute("expired");
        if (expiredException instanceof TokenExpiredException) {
            response.setStatus(HttpServletResponse.SC_MOVED_TEMPORARILY);

            body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
            body.put("error", "Unauthorized");
            body.put("message", authException.getMessage());
            body.put("detail", ((TokenExpiredException) expiredException).getMessage());
            body.put("path", request.getServletPath());
            body.put("redirectUrl", backendHost + "/api/users/refresh");
        } else {
            // 응답 객체 초기화
            body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
            body.put("error", "Unauthorized");
            body.put("message", authException.getMessage());
            body.put("detail", request.getAttribute("exception"));
            body.put("path", request.getServletPath());
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        }
        final ObjectMapper mapper = new ObjectMapper();
        // response 객체에 응답 객체를 넣어줌
        mapper.writeValue(response.getOutputStream(), body);

    }

}