package com.bangle.domain.book.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bangle.domain.book.dto.BookAndReviewResponse;
import com.bangle.domain.book.dto.BookDetailResponse;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.entity.Book;
import com.bangle.global.auth.security.CustomMemberDetails;

public interface BookRepositoryCustom {

	Page<BookResponse> findAllByTitleContainsKeywordForSearch(String keyword,String category, Pageable pageable);
	List<String> getIntro(String userId);
	List<Book> getBooks(String userId);
	BookAndReviewResponse findDetailBookByIdAndMember(CustomMemberDetails member, long id);
}
