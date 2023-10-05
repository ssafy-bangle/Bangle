package com.bangle.domain.bookshelf.dto;

import lombok.Builder;

@Builder
public record BookshelfResponse(
        Long bookId,
        String title,
        String address,
        String cover,
        int progress,
        Long authorId) {

}
