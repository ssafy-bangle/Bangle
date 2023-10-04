package com.bangle.domain.member.dto;

import java.util.List;

public record InterestRequest(
	List<String> interests
) {
}
