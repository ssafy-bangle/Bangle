package com.bangle.domain.author.service;

import com.bangle.domain.author.dto.AuthorDetailResponse;
import com.bangle.domain.author.dto.AuthorResponse;
import com.bangle.domain.author.entity.Author;
import com.bangle.domain.author.repository.AuthorRepository;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.follow.entity.Follow;
import com.bangle.domain.follow.repository.FollowRepository;
import com.bangle.global.auth.security.CustomMemberDetails;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthorService {

	private final AuthorRepository authorRepository;
	private final BookRepository bookRepository;
	private final FollowRepository followRepository;

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
	public AuthorDetailResponse getAuthorDetail(@AuthenticationPrincipal CustomMemberDetails member, Long authorId) {
		Author author = authorRepository.findById(authorId)
				.orElseThrow(() -> new IllegalArgumentException("저자가 존재하지 않습니다"));
		System.out.println(author.getMember().getClass());
		List<BookResponse> list = bookRepository.findByAuthorId(authorId);

		// 로그인 하지 않았을 경우
		if (member == null) {
			return new AuthorDetailResponse(author, false, list);
		}
		
		Optional<Follow> follow = followRepository.findByMemberIdAndAuthorId(member.getPK(), authorId);
		// 팔로우 데이터가 없을 경우
		if (follow.isEmpty()){
			return new AuthorDetailResponse(author, false, list);
		}

		return new AuthorDetailResponse(author, !follow.get().getDelete(), list);
	}
}
