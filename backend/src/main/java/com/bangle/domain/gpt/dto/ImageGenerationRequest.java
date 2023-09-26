package com.bangle.domain.gpt.dto;

import java.io.Serializable;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
//OpenAI에 요청할 DTO Format('response_format' 추가하셔도됩니다.)
public class ImageGenerationRequest implements Serializable {
	private String prompt;
	// private String negative_prompt ="person, hand, finger";
	private int n;
	private String size;

	@Builder
	public ImageGenerationRequest(String prompt,int n, String size) {
		this.prompt = prompt;
		this.n = n;
		this.size = size;
	}
}