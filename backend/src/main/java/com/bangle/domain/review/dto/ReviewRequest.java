package com.bangle.domain.review.dto;

public record ReviewRequest(Long bookId, String content, float score, String cover) {
}
