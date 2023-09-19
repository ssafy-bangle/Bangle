package com.bangle.domain.author.service;

import com.bangle.domain.author.dto.AuthorResponse;
import com.bangle.domain.author.entity.Author;
import com.bangle.domain.author.repository.AuthorRepository;
import com.bangle.domain.author.repository.AuthorRepositoryCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthorService {

	private final AuthorRepository authorRepository;
	private final AuthorRepositoryCustom authorRepositoryCustom;

	public Author findById(long authorId) {
		return authorRepository.findById(authorId)
				.orElseThrow(() -> new IllegalArgumentException("저자가 존재하지 않습니다"));
	}

	public AuthorResponse getAuthorInfo(Long memberId) {
		return authorRepositoryCustom.getAuthorInfo(memberId);
	}
}
