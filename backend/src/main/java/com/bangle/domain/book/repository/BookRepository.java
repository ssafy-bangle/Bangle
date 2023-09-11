package com.bangle.domain.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.book.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
