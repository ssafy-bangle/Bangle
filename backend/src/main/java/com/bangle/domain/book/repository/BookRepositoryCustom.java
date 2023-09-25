package com.bangle.domain.book.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bangle.domain.book.dto.BookResponse;

public interface BookRepositoryCustom {

	Page<BookResponse> findAllByTitleContainsKeywordForSearch(String keyword,String category, Pageable pageable);


}
