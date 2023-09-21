package com.bangle.domain.book.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {
	private final BookRepository bookRepository;

	@Transactional
	public List<BookResponse> getList(){
		return bookRepository.findAll()
			.stream()
			.map(Book::toResponse)
			.collect(Collectors.toList());
	}
}
