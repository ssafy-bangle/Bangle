package com.bangle.domain.member.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.member.entity.Interest;

public interface InterestRepository extends JpaRepository<Interest,Long> {
	List<Interest> findByMemberId(Long memberId);
}
