package com.bangle.domain.author.service;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.author.repository.AuthorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthorService {

	private final AuthorRepository authorRepository;

	public Author findById(long authorId) {
		return authorRepository.findById(authorId)
				.orElseThrow(() -> new IllegalArgumentException("저자가 존재하지 않습니다"));
	}
}
