package com.bangle.domain.bookshelf.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class BookshelfPageResponse {
    Long bookshelfId;
    String title;
    String address;
    Integer readPages;
    Integer totalPages;
    String epubCfi;
}
