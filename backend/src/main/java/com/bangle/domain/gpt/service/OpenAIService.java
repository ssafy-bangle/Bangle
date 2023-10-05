package com.bangle.domain.gpt.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bangle.domain.gpt.dto.CommentRequest;
import com.bangle.domain.gpt.dto.CommentResponse;
import com.bangle.domain.gpt.dto.ImageGenerationRequest;
import com.bangle.domain.gpt.dto.ImageGenerationResponse;
import com.bangle.domain.gpt.dto.PromptGenerationRequest;
import com.bangle.global.config.OpenAIConfig;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OpenAIService {

	private final RestTemplate restTemplate;

	@Value("${api-key.chat-gpt}")
	private String apiKey;

	public CommentResponse makePrompt(CommentRequest commentRequest) {
		StringBuilder prompt = new StringBuilder();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.parseMediaType(OpenAIConfig.MEDIA_TYPE));
		httpHeaders.add(OpenAIConfig.AUTHORIZATION, OpenAIConfig.BEARER + apiKey);

		prompt.append("너는 이미지 생성을 돕는 프롬프트를 작성할꺼야. 이 프롬프트는 dall-e 2 모델에 적용될거야. ")
			.append(commentRequest.getComment())
			.append("라는 내용을 바탕으로 그림으로 그릴 수 있게 특징을 자세하게 추출해서 프롬프트를 작성해줘. ")
			.append("문장의 시작은 'a illustration of'로 시작해. ")
			.append("프롬프트를 작성할 때 주의할 점은 두 가지가 있어."
				+ " 너의 답변은 700자보다 작아야하고, 그림에는 사람이 없으면 좋겠어 ");

		PromptGenerationRequest promptGenerationRequest = PromptGenerationRequest.create(prompt);

		HttpEntity<PromptGenerationRequest> requestHttpEntity = new HttpEntity<>(promptGenerationRequest, httpHeaders);

		ResponseEntity<CommentResponse> responseEntity = restTemplate.postForEntity(
			OpenAIConfig.CHAT_URL,
			requestHttpEntity,
			CommentResponse.class
		);
		return responseEntity.getBody();
	}

	public ImageGenerationResponse makeImages(CommentRequest commentRequest) {
		String prompt;
		while (true) {
			CommentResponse commentResponse = makePrompt(commentRequest);
			if (commentResponse.getComment().length() < 1000) {
				prompt = commentResponse.getComment();
				break;
			}
		}

		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.parseMediaType(OpenAIConfig.MEDIA_TYPE));
		httpHeaders.add(OpenAIConfig.AUTHORIZATION, OpenAIConfig.BEARER + apiKey);

		ImageGenerationRequest imageGenerationRequest = ImageGenerationRequest.builder()
			.prompt(prompt)
			.n(OpenAIConfig.IMAGE_COUNT)
			.size(OpenAIConfig.IMAGE_SIZE)
			.build();

		HttpEntity<ImageGenerationRequest> requestHttpEntity = new HttpEntity<>(imageGenerationRequest, httpHeaders);

		ResponseEntity<ImageGenerationResponse> responseEntity = restTemplate.postForEntity(
			OpenAIConfig.IMAGE_URL,
			requestHttpEntity,
			ImageGenerationResponse.class
		);
		return responseEntity.getBody();
	}
}
