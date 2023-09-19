package com.bangle.domain.book.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.book.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	@Override
	List<Book> findAllById(Iterable<Long> id);

	@Override
	Optional<Book> findById(Long id);
}
