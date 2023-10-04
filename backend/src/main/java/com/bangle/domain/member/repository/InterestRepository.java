package com.bangle.domain.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.member.entity.Interest;

public interface InterestRepository extends JpaRepository<Interest,Long> {
}
