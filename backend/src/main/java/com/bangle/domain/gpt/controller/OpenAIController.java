package com.bangle.domain.gpt.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bangle.domain.gpt.dto.CommentRequest;
import com.bangle.domain.gpt.dto.ImageGenerationResponse;
import com.bangle.domain.gpt.service.OpenAIService;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/openai")
public class OpenAIController {

	private final OpenAIService openAIService;

	@PostMapping("/createImage")
	public ResponseEntity<?> sendComment(@RequestBody CommentRequest commentRequest) {
		ImageGenerationResponse imageGenerationResponse = null;
		imageGenerationResponse = openAIService.makeImages(commentRequest);

		return BaseResponse.okWithData(HttpStatus.OK, "이미지생성",
			imageGenerationResponse);
	}

}
