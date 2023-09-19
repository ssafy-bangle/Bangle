package com.bangle.domain.author.repository;

import com.bangle.domain.author.dto.AuthorResponse;

public interface AuthorRepositoryCustom {

    AuthorResponse getAuthorInfo(Long memberId);
}
