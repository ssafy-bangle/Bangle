package com.bangle.domain.bookshelf.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.bookshelf.dto.BookshelfPageResponse;
import com.bangle.domain.member.entity.Member;
import com.bangle.global.auth.security.CustomMemberDetails;
import org.springframework.stereotype.Service;

import com.bangle.domain.bookshelf.dto.BookshelfResponse;
import com.bangle.domain.bookshelf.dto.BookshelfSaveRequest;
import com.bangle.domain.bookshelf.entity.Bookshelf;
import com.bangle.domain.bookshelf.repository.BookshelfRepository;
import com.bangle.domain.member.service.MemberService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookshelfService {

	private final MemberService memberService;
	private final BookshelfRepository bookshelfRepository;
	private final BookRepository bookRepository;

	public List<BookshelfResponse> list(Long memberId) {

		List<BookshelfResponse> bookshelfResponses = bookshelfRepository.findBookshelfByMemberId(memberId);

		System.out.println(bookshelfResponses);

		for (BookshelfResponse bookshelfResponse :
			bookshelfResponses) {
			System.out.println(bookshelfResponse.toString());
		}

		return bookshelfResponses;
	}

	@Transactional
	public void saveBook(Long memberId, BookshelfSaveRequest bookshelfSaveRequest) {
		Bookshelf book = bookshelfRepository.findByMemberIdAndBookId(memberId,
			bookshelfSaveRequest.bookId());
        book.save(bookshelfSaveRequest.currentPage(), bookshelfSaveRequest.epubCfi());
	}

	public BookshelfPageResponse getBookshelfPageResponse(Long memberId, Long bookId) {
		Bookshelf bookshelf = bookshelfRepository.findByMemberIdAndBookId(memberId, bookId);
		Book book = bookRepository.findById(bookId).orElseThrow(NoSuchElementException::new);

		return BookshelfPageResponse.builder()
				.bookshelfId(bookshelf.getId())
				.title(book.getTitle())
				.address(bookshelf.getAddress())
				.readPages(bookshelf.getReadPages())
				.totalPages(book.getTotalPages())
				.epubCfi(bookshelf.getEpubCfi())
				.build();
	}
}
