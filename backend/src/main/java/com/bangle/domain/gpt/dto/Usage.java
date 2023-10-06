package com.bangle.domain.gpt.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
class Usage{
	private int prompt_tokens;
	private int completion_tokens;
	private int total_tokens;
}
