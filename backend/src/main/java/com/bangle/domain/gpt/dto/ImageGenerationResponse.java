package com.bangle.domain.gpt.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
//요청에 대한 응답을 받을 DTO
public class ImageGenerationResponse {

	private List<ImageURL> data;


	@Getter
	@Setter
	public static class ImageURL {
		private String url;

	}
}
