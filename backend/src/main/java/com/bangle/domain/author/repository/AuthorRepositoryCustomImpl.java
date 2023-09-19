package com.bangle.domain.author.repository;

import com.bangle.domain.author.dto.AuthorResponse;
import com.bangle.domain.author.entity.QAuthor;
import com.bangle.domain.member.entity.QMember;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AuthorRepositoryCustomImpl implements AuthorRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    QMember member = QMember.member;
    QAuthor author = QAuthor.author;

    @Override
    public AuthorResponse getAuthorInfo(Long memberId) {
        return jpaQueryFactory.select(
                    Projections.constructor(AuthorResponse.class, member.nickname, member.dust, member.email, member.roles, member.userId, author.follower,
                            author.income, author.introduction))
                .from(member)
                .join(author).on(member.id.eq(author.member.id))
                .where(member.id.eq(memberId))
                .fetchOne();
    }

}
