package com.bangle.domain.book.dto;

import com.bangle.domain.bookshelf.entity.Bookshelf;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookIdAddressResponse {
    Long id;
    String address;
    public BookIdAddressResponse(Bookshelf bookshelf) {
        id = bookshelf.getId();
        address = bookshelf.getAddress();
    }
}
