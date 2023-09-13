package com.bangle.domain.bookshelf.repository;

import com.bangle.domain.bookshelf.entity.Bookshelf;
import com.bangle.domain.member.entity.Member;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface BookshelfRepository extends JpaRepository<Bookshelf, Long>, BookshelfDetailRepositoryCustom {

    List<Bookshelf> findAllByMemberId(Long MemberId);
}
