package com.bangle.domain.book.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.bangle.domain.author.service.AuthorService;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.service.BookService;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/books")
public class BookController {
	private final BookService bookService;
	private final AuthorService authorService;

	@GetMapping
	public ResponseEntity<?> getList(){
		return BaseResponse.okWithData(HttpStatus.OK, "책 목록 조회", bookService.getList());
	}

	@GetMapping("/search")
	public ResponseEntity<?> searchBookAndAuthorByKeyword(@RequestParam(required = false) String keyword,@RequestParam(required = false) String category, Pageable pageable) {
		Page<BookResponse> bookResponses = bookService.searchByTitleContainsKeyword(keyword,category, pageable);
		Page<String> authorNames = authorService.searchByNicknameContainsKeyword(keyword, pageable);
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("books", bookResponses);
		responseMap.put("authors", authorNames);
		return BaseResponse.okWithData(HttpStatus.OK, "조회 완료", responseMap);
	}
}
