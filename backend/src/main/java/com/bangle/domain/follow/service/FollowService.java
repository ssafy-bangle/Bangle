package com.bangle.domain.follow.service;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.author.service.AuthorService;
import com.bangle.domain.follow.entity.Follow;
import com.bangle.domain.follow.repository.FollowRepository;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.service.MemberService;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class FollowService {

	private final FollowRepository followRepository;
	private final AuthorService authorService;
	private final MemberService memberService;

	@Transactional
	public boolean follow(Long memberId, long authorId) {
		try {
			Optional<Follow> follow = followRepository.findByMemberIdAndAuthorId(memberId, authorId);
			if (follow.isPresent()){
				follow.get().changeDelete();
				return true;
			}
			Author findAuthor = authorService.findById(authorId);
			Member findUser = memberService.findById(memberId);
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
