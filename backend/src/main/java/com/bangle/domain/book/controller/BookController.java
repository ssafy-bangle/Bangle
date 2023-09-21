package com.bangle.domain.book.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.bangle.domain.book.service.BookService;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class BookController {
	private final BookService bookService;


	@GetMapping("/api/books/")
	public ResponseEntity<?> getList(){
		return BaseResponse.okWithData(HttpStatus.OK, "책 목록 조회", bookService.getList());
	}
}
