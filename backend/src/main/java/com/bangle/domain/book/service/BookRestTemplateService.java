package com.bangle.domain.book.service;

import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.dto.IntroductionRequest;
import com.bangle.domain.book.dto.IntroductionResponse;
import com.bangle.domain.book.repository.BookRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookRestTemplateService {

	private final BookRepository bookRepository;

	public List<BookResponse> getRecommendBooks(String userId){
		List<String> string_list = bookRepository.getIntro(userId); // 멤버가 구매한 목록들의 소개글만 갖고오기
		for (String s: string_list){
			System.out.println("intro = " + s);
		}
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);

		IntroductionRequest introductionRequest = new IntroductionRequest(string_list);
		HttpEntity<IntroductionRequest> http = new HttpEntity<>(introductionRequest, headers);

		ResponseEntity<IntroductionResponse> responseEntity = restTemplate.postForEntity("http://localhost:8080/api1/string-list/",
			http, IntroductionResponse.class);
		IntroductionResponse genreResponse = responseEntity.getBody();
		List<String> intro = genreResponse.getRecommendedIntroductions();
		System.out.println("itro size" + intro.size());
		for (String s: intro){
			System.out.println("s = " + s);
		}
		return null;
	}
}
