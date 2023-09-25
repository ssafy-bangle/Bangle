package com.bangle.domain.gpt.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PromptGenerationRequest {

	private String model;

	private List<Message> messages;

	private int max_tokens;

	private Float temperature;

	private String stop;

	public static PromptGenerationRequest create(StringBuilder prompt) {
		// Message system = Message.builder()
		// 	.role("system")
		// 	.content("You will write a prompt to create a picture")
		// 	.build();
		Message message = Message.builder()
			.role("system")
			.content(prompt.toString())
			.build();
		List<Message> mlist = new ArrayList<>();
		// mlist.add(system);
		mlist.add(message);

		return PromptGenerationRequest.builder()
			.model("gpt-3.5-turbo")
			.messages(mlist)
			.max_tokens(70)
			.temperature(0.5f)
			.stop("None")
			.build();
	}


}
