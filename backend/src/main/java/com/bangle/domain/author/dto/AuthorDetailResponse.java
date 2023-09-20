package com.bangle.domain.author.dto;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.book.dto.BookResponse;
import java.util.List;

public record AuthorDetailResponse(
        String nickname,
        Long follower,
        String introduction,
        List<BookResponse> bookList
) {
    public AuthorDetailResponse(Author author, List<BookResponse> bookList){
        this(author.getNickname(), author.getFollower(), author.getIntroduction(),bookList);
    }
}
