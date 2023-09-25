package com.bangle.domain.gpt.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
class Choice{

	private long index;
	private Message message;
	private String finish_reason;
}
