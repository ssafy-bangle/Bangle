package com.bangle.domain.gpt.dto;

import java.io.Serializable;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
//Front단에서 요청하는 DTO
public class CommentRequest implements Serializable {
	private String comment;

	public CommentRequest(String comment) {
		this.comment = comment;
	}
}