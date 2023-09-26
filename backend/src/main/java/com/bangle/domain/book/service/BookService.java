package com.bangle.domain.book.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.bangle.domain.book.dto.BookAndReviewResponse;
import com.bangle.domain.book.dto.BookDetailResponse;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.review.entity.Review;
import com.bangle.domain.review.repository.ReviewRepository;
import com.bangle.global.auth.security.CustomMemberDetails;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {
	private final BookRepository bookRepository;
	private final ReviewRepository reviewRepository;

	@Transactional
	public List<BookResponse> getList() {
		return bookRepository.findAll()
			.stream()
			.map(Book::toResponse)
			.collect(Collectors.toList());
	}

	public Page<BookResponse> searchByTitleContainsKeyword(String keyword, String category, Pageable pageable) {
		return bookRepository.findAllByTitleContainsKeywordForSearch(keyword, category, pageable);
	}

	@Transactional
	public BookAndReviewResponse getDetail(CustomMemberDetails member, long id) {

		BookAndReviewResponse findBookDetail = bookRepository.findDetailBookByIdAndMember(member, id);
		List<Review> review = reviewRepository.findAllByBookId(id);
		findBookDetail.addReview(review);

		return findBookDetail;
	}
}
