package com.bangle.domain.author.repository;

import com.bangle.domain.author.entity.Author;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long>, AuthorRepositoryCustom {
    Optional<Author> findById(Long authorId);

    Optional<Author> findByMemberId(Long memberId);
}
