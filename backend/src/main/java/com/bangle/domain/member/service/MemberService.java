package com.bangle.domain.member.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {

	private final MemberRepository memberRepository;

	public Member save(Member member) {
		return memberRepository.save(member);
	}

	public Optional<Member> findByUserId(String userId) {
		return memberRepository.findByUserId(userId);
	}
}
