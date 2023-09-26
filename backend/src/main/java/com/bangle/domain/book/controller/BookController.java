package com.bangle.domain.book.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.bangle.domain.author.service.AuthorService;
import com.bangle.domain.blockchain.service.IpfsService;
import com.bangle.domain.book.dto.BookAndReviewResponse;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.dto.PublishRequest;
import com.bangle.domain.book.service.BookService;
import com.bangle.domain.order.dto.IpfsResponse;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/books")
public class BookController {
	private final BookService bookService;
	private final AuthorService authorService;
	private final IpfsService ipfsService;

	@GetMapping
	public ResponseEntity<?> getList() {
		return BaseResponse.okWithData(HttpStatus.OK, "책 목록 조회", bookService.getList());
	}

	@GetMapping("/search")
	public ResponseEntity<?> searchBookAndAuthorByKeyword(@RequestParam(required = false) String keyword,
		@RequestParam(required = false) String category, Pageable pageable) {
		Page<BookResponse> bookResponses = bookService.searchByTitleContainsKeyword(keyword, category, pageable);
		Page<String> authorNames = authorService.searchByNicknameContainsKeyword(keyword, pageable);
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("books", bookResponses);
		responseMap.put("authors", authorNames);
		return BaseResponse.okWithData(HttpStatus.OK, "조회 완료", responseMap);
	}

	@PostMapping(value = "/publish", consumes = {
		MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<?> publishBook(
		@AuthenticationPrincipal CustomMemberDetails customMemberDetails,
		@RequestPart(value = "publishRequest") PublishRequest publishRequest,
		@RequestPart(value = "file") MultipartFile file) {
		try {
			System.out.println(publishRequest.getTitle());
			System.out.println(publishRequest.getIntroduce());
			// check if file is 'epub'
			String extension = StringUtils.getFilenameExtension(file.getOriginalFilename());
			System.out.println(extension);
			if (extension != null && !extension.equals("epub")) {
				throw new IllegalArgumentException("Not a EPUB file");
			}
			IpfsResponse ipfsResponse = ipfsService
				.upload(publishRequest, file, customMemberDetails.getPublicKey());
			System.out.println("IPFS RESPONSE: " + ipfsResponse.getKey() + " / " + ipfsResponse.getAddress());
			return new ResponseEntity<>(ipfsResponse, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/detail/{id}")
	public ResponseEntity<?> getDetailBook(@AuthenticationPrincipal CustomMemberDetails member, @PathVariable long id) {

		BookAndReviewResponse detail = bookService.getDetail(member, id);
		return BaseResponse.okWithData(HttpStatus.OK, "책 상세 정보", detail);
	}
}
