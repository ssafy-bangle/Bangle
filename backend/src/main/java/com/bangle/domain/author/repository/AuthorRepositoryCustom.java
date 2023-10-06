package com.bangle.domain.author.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bangle.domain.author.dto.AuthorResponse;
import com.bangle.domain.author.dto.AuthorSearchResponse;
import com.querydsl.core.Tuple;

public interface AuthorRepositoryCustom {

    AuthorResponse getAuthorInfo(Long memberId);

	Page<AuthorSearchResponse> findAllByNicknameContainsKeywordForSearch(String keyword, Pageable pageable);
}
