package com.bangle.domain.review.dto;

import java.time.LocalDateTime;

public record ReviewDetailResponse(Long id, String content, float score, String cover, LocalDateTime createdTime,
								   String nickname, String bookTitle,String genre) {
}
