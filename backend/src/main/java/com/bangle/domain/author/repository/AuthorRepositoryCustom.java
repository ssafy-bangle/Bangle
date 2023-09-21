package com.bangle.domain.author.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bangle.domain.author.dto.AuthorResponse;

public interface AuthorRepositoryCustom {

    AuthorResponse getAuthorInfo(Long memberId);

	Page<String> findAllByNicknameContainsKeywordForSearch(String keyword, Pageable pageable);
}
