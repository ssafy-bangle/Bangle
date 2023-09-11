package com.bangle.domain.follow.service;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.author.service.AuthorService;
import com.bangle.domain.follow.entity.Follow;
import com.bangle.domain.follow.repository.FollowRepository;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FollowService {

	private final FollowRepository followRepository;
	private final AuthorService authorService;
	private final MemberService memberService;

	public boolean follow(String userId, long authorId) {
		try {
			Author findAuthor = authorService.findById(authorId);
			Member findUser = memberService.findByUserId(userId);
			followRepository.save(Follow.builder()
					.author(findAuthor)
					.member(findUser)
					.delete(false)
					.build());
			return true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}
}
