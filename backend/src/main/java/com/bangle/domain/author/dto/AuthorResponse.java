package com.bangle.domain.author.dto;

public record AuthorResponse(
        String nickname,
        int dust,
        String email,
        String roles,
        String userId,
        Long follower,
        Long income,
        String introduction
) {

}
