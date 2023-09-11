package com.bangle.global.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.bangle.domain.member.service.MemberService;
import com.bangle.global.auth.jwt.JwtAuthenticationFilter;
import com.bangle.global.auth.security.CustomMemberDetailService;
import com.bangle.global.auth.security.RestAccessDeniedHandler;
import com.bangle.global.auth.security.RestAuthenticationEntryPoint;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig {

	private final MemberService memberService;
	private final CustomMemberDetailService customMemberDetailService;
	private final PasswordEncoder passwordEncoder;
	private final RedisTemplate<String, String> template;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.cors(Customizer.withDefaults())
			.csrf(AbstractHttpConfigurer::disable)
			.httpBasic(AbstractHttpConfigurer::disable)
			.formLogin(AbstractHttpConfigurer::disable)
			.sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.apply(new MyCustomDsl());
		/*
		.antMatchers("/").permitAll() //테스트 페이지
			.antMatchers("/api/users/login").permitAll() //로그인
		 */
		http
			.authorizeHttpRequests(requests -> requests.anyRequest().permitAll());

		http
			.exceptionHandling(e -> e.accessDeniedHandler(new RestAccessDeniedHandler())
				.authenticationEntryPoint(new RestAuthenticationEntryPoint()));// 그 외 모든 요청에 대해 인증 필요

		return http.build();
	}

	// DAO 기반으로 Authentication Provider를 생성
	// BCrypt Password Encoder와 UserDetailService 구현체를 설정
	@Bean
	DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
		daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
		daoAuthenticationProvider.setUserDetailsService(this.customMemberDetailService);
		return daoAuthenticationProvider;
	}

	// web.ignore 방식은 보안상 권장되지 않고 내가 만든 커스텀 필터에 대해서 동작하지 않음
	// 아래 구현된 방법을 이용하도록 함
	// @Bean
	// @Order(0)
	// public SecurityFilterChain resources(HttpSecurity http) throws Exception {
	// 	return http.authorizeHttpRequests(requestMatcherConfigurer -> requestMatcherConfigurer.requestMatchers("/favicon.ico",
	// 		"/category/**",
	// 		"/rooms",
	// 		"/error",
	// 		"/swagger-resources/**",
	// 		"/swagger-ui/**",
	// 		"/v3/api-docs",
	// 		"/resources/**",
	// 		"/webjars/**").permitAll())
	// 		.authorizeHttpRequests(authorize->authorize.anyRequest().permitAll())
	// 		.requestCache(RequestCacheConfigurer::disable)
	// 		.securityContext(AbstractHttpConfigurer::disable)
	// 		.sessionManagement(AbstractHttpConfigurer::disable)
	// 		.build();
	// }

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowCredentials(true); // 쿠키를 받을건지
		configuration.addAllowedOriginPattern("*");
		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE"));
		configuration.addAllowedHeader("*");

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
		@Override
		public void configure(HttpSecurity http) throws Exception {
			AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
			http
				.addFilterBefore(new JwtAuthenticationFilter(authenticationManager, memberService, template),
					UsernamePasswordAuthenticationFilter.class);
		}
	}
}
