package com.bangle.domain.author.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.author.entity.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}
