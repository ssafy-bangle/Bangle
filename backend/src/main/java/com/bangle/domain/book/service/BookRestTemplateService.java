package com.bangle.domain.book.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bangle.domain.book.dto.BookRequest;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.dto.IntroductionRequest;
import com.bangle.domain.book.dto.IntroductionResponse;
import com.bangle.domain.book.dto.RestRequest;
import com.bangle.domain.book.dto.testResponse;
import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookRestTemplateService {

	private final BookRepository bookRepository;

	public List<BookResponse> getRecommendBooks(String userId){
		List<RestRequest> bookList = bookRepository.getBooks(userId)
									.stream()
									.map(Book::toRequest)
									.collect(Collectors.toList()); //////////
		// REST template 준비
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);

		// dto 만들기
		BookRequest request = new BookRequest(bookList);///////////
		HttpEntity<BookRequest> httpBook = new HttpEntity<>(request, headers);///////

		// 장고 서버에 요청
		ResponseEntity<testResponse> responseEntity = restTemplate.postForEntity("http://localhost:8080/api1/string-list/",
			httpBook, testResponse.class);

		// 장고서버에서 받은 객체 -> 아예 BOOK으로 받자.
		testResponse response = responseEntity.getBody();

		/** TODO
		 *  클래스명다듬기
		 *  api호출 경로 genre -> introduction 이런식으로 바꾸기
		 *	코드 다듬기
		 */
		return response.books();
	}
}
