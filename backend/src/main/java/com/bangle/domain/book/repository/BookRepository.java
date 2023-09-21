package com.bangle.domain.book.repository;

import java.util.List;
import java.util.Optional;
import com.bangle.domain.book.dto.BookResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.book.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	List<BookResponse> findByAuthorId(Long authorId);
}
