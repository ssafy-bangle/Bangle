package com.bangle.domain.bookshelf.service;

import java.util.List;

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
        book.save(bookshelfSaveRequest.currentPage());
	}
}
