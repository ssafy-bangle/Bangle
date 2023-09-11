package com.bangle.domain.member.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.authorRepository.AuthorRepository;
import com.bangle.domain.member.dto.JoinRequest;
import com.bangle.domain.member.dto.MemberResponse;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {

	private final MemberRepository memberRepository;
	private final AuthorRepository authorRepository;

	public Member save(Member member) {
		return memberRepository.save(member);
	}

	public Member findByUserId(String userId) {
		Optional<Member> op = memberRepository.findByUserId(userId);
		return memberRepository.findByUserId(userId)
			.orElseThrow(() -> new IllegalArgumentException("사용자가 존재하지 않습니다"));
	}

	public MemberResponse join(String username, JoinRequest joinForm) {
		Member member = findByUserId(username);
		if (joinForm.isAuthor()) {
			Author saveAuthor = authorRepository.save(Author.builder()
				.member(member)
				.follower(0L)
				.income(0L)
				.introduction("")
				.build());
			member.joinAuthor(joinForm, saveAuthor);
			return new MemberResponse(member);
		}
		member.join(joinForm);
		return new MemberResponse(member);
	}

	public MemberResponse memberInfo() {
		return null;
	}
}
