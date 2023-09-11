package com.bangle.domain.authorRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.author.entity.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}
