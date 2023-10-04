package com.bangle.domain.follow.repository;

import com.bangle.domain.author.dto.AuthorSearchResponse;
import com.bangle.domain.author.entity.QAuthor;
import com.bangle.domain.follow.entity.QFollow;
import com.bangle.domain.member.entity.QMember;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class FollowRepositoryCustomImpl implements FollowRepositoryCustom {

	private final JPAQueryFactory jpaQueryFactory;

	QFollow follow = QFollow.follow;
	QAuthor author = QAuthor.author;
	QMember member = QMember.member;

	@Override
	public List<AuthorSearchResponse> findAllByMemberId(Long memberId) {
        return jpaQueryFactory.select(Projections.constructor(AuthorSearchResponse.class, author.id, member.nickname))
				.from(follow)
				.join(follow.author, author)
				.join(author.member, member)
				.where(follow.member.id.eq(memberId).and(follow.delete.eq(false)))
				.fetch();
	}
}
