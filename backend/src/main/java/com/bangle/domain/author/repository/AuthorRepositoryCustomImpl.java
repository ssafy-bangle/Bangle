package com.bangle.domain.author.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;

import com.bangle.domain.author.dto.AuthorResponse;
import com.bangle.domain.author.entity.QAuthor;
import com.bangle.domain.member.entity.QMember;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AuthorRepositoryCustomImpl implements AuthorRepositoryCustom {

	private final JPAQueryFactory jpaQueryFactory;

	QMember member = QMember.member;
	QAuthor author = QAuthor.author;

	@Override
	public AuthorResponse getAuthorInfo(Long memberId) {
		return jpaQueryFactory.select(
				Projections.constructor(AuthorResponse.class, member.nickname, member.dust, member.email, member.roles,
					member.userId, author.follower,
					author.income, author.introduction))
			.from(author)
			.join(author.member, member)
			.where(member.id.eq(memberId))
			.fetchOne();
	}

	@Override
	public Page<String> findAllByNicknameContainsKeywordForSearch(String keyword, Pageable pageable) {
		List<String> contents = jpaQueryFactory.select(member.nickname)
			.from(author)
			.join(author.member, member)
			.where(member.nickname.contains(keyword))
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetch();
		JPAQuery<Long> countQuery = jpaQueryFactory.select(author.count())
			.from(author)
			.join(author.member, member)
			.where(member.nickname.contains(keyword));

		return PageableExecutionUtils.getPage(contents, pageable, countQuery::fetchOne);
	}

}
