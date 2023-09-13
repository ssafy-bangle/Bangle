package com.bangle.domain.member.dto;

import com.bangle.domain.member.entity.Member;

public record MemberResponse(
	String nickname,
	int dust,
	String email,
	String role,
	String userId
) {

	public MemberResponse(Member member) {
		this(member.getNickname(), member.getDust(),member.getEmail(),member.getRoles(),member.getUserId());
	}
}
