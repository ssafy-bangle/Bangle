package com.bangle.domain.gpt.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class CommentResponse {

	private String id;
	private String object;
	private long created;
	private String model;
	private List<Choice> choices;
	private Usage usage;

	public String getComment(){
		return choices.get(0)
			.getMessage()
			.getContent();
	}


}

