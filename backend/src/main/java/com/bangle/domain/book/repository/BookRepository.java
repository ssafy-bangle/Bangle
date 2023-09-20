package com.bangle.domain.book.repository;

import com.bangle.domain.book.dto.BookResponse;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.book.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<BookResponse> findByAuthorId(Long authorId);
}
