package com.bangle.domain.follow.repository;

import com.bangle.domain.author.dto.AuthorSearchResponse;

import java.util.List;

public interface FollowRepositoryCustom {

    List<AuthorSearchResponse> findAllByMemberId(Long memberId);
}
