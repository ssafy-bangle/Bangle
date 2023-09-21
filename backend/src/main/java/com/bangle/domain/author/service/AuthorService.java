package com.bangle.domain.author.service;

import com.bangle.domain.author.dto.AuthorDetailResponse;
import com.bangle.domain.author.dto.AuthorResponse;
import com.bangle.domain.author.entity.Author;
import com.bangle.domain.author.repository.AuthorRepository;
import com.bangle.domain.author.repository.AuthorRepositoryCustom;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.repository.BookRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthorService {

	private final AuthorRepository authorRepository;
	private final BookRepository bookRepository;

	public Page<String> searchByNicknameContainsKeyword(String keyword, Pageable pageable) {
		return authorRepository.findAllByNicknameContainsKeywordForSearch(keyword, pageable);
	}

	public Author findById(long authorId) {
		return authorRepository.findById(authorId)
				.orElseThrow(() -> new IllegalArgumentException("저자가 존재하지 않습니다"));
	}

	public AuthorResponse getAuthorInfo(Long memberId) {
		return authorRepository.getAuthorInfo(memberId);
	}


	@Transactional(readOnly = true)
	public AuthorDetailResponse getAuthorDetail(Long authorId) {
		Author author = authorRepository.findById(authorId)
				.orElseThrow(() -> new IllegalArgumentException("저자가 존재하지 않습니다"));
		System.out.println(author.getMember().getClass());
		List<BookResponse> list = bookRepository.findByAuthorId(authorId);

		return new AuthorDetailResponse(author, list);
	}
}
