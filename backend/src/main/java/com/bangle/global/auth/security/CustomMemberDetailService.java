package com.bangle.global.auth.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.service.MemberService;

import lombok.RequiredArgsConstructor;

/**
 * 현재 액세스 토큰으로 부터 인증된 유저의 상세정보(활성화 여부, 만료, 롤 등) 관련 서비스 정의.
 */
@Component
@RequiredArgsConstructor
public class CustomMemberDetailService implements UserDetailsService {

	private final MemberService memberService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		try {
			Member findMember = memberService.findByUserId(username);
            return new CustomMemberDetails(findMember);
		} catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
	}
}
