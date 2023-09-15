package com.bangle.domain.member.service;

import com.bangle.domain.author.repository.AuthorRepository;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.member.dto.JoinRequest;
import com.bangle.domain.member.dto.MemberResponse;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.repository.MemberRepository;

import jakarta.transaction.Transactional;
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
		return memberRepository.findByUserId(userId)
			.orElseThrow(() -> new IllegalArgumentException("사용자가 존재하지 않습니다"));
	}

	public Optional<Member> getOptionalByUserId(String userId) {
		return memberRepository.findByUserId(userId);
	}

	@Transactional
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

	public MemberResponse memberInfo(String userId) {
		Member member = memberRepository.findByUserId(userId).orElseThrow(() -> new IllegalArgumentException("사용자가 없습니다"));
		return MemberResponse.builder()
				.nickname(member.getNickname())
				.dust(member.getDust())
				.email(member.getEmail())
				.role(member.getRoles())
				.userId(member.getUserId())
				.build();
	}

	@Transactional
	public void changeNickname(String userId, String nickname) {
		Member member = findByUserId(userId);
		member.changeNickname(nickname);
	}
}
