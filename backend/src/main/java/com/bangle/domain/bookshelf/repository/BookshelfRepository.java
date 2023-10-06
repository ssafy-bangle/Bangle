package com.bangle.domain.bookshelf.repository;

import com.bangle.domain.bookshelf.entity.Bookshelf;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookshelfRepository extends JpaRepository<Bookshelf, Long>, BookshelfDetailRepositoryCustom {

	Bookshelf findByMemberIdAndBookId(Long memberId, long bookId);

}
