package com.bangle.domain.book.dto;

import com.bangle.domain.bookshelf.entity.Bookshelf;

public class BookIdAddressResponse {
    Long id;
    String address;
    public BookIdAddressResponse(Bookshelf bookshelf) {
        id = bookshelf.getId();
        address = bookshelf.getAddress();
    }
}
