package com.bangle.domain.member.dto;

import java.util.Objects;

public record JoinRequest(String nickname, String publicKey , String role) {
	public JoinRequest{
		Objects.requireNonNull(nickname);
		Objects.requireNonNull(publicKey);
		Objects.requireNonNull(role);
	}
	public boolean isAuthor(){
		return role.equals("AUTHOR");
	}
}
