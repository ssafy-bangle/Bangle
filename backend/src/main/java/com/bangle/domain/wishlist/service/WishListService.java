package com.bangle.domain.wishlist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.repository.MemberRepository;
import com.bangle.domain.wishlist.entity.WishList;
import com.bangle.domain.wishlist.repository.WishListRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WishListService {

	private final WishListRepository wishListRepository;
	private final MemberRepository memberRepository;
	private final BookRepository bookRepository;


	public List<BookResponse> getWishList(Long memberId) {
		return wishListRepository.findAllWishListByMember(memberId);
	}

	@Transactional
	public void wish(Long memberId, Long bookId) {
		Optional<WishList> findWishList = wishListRepository.findByMemberIdAndBookId(memberId, bookId);

		findWishList.ifPresentOrElse(WishList::changeWish,() -> {
			Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new IllegalArgumentException("멤버가 존재하지 않습니다."));

			Book book = bookRepository.findById(bookId)
				.orElseThrow(() -> new IllegalArgumentException("책 존재하지 않습니다."));
			WishList wish = WishList.createWish(member, book);
			wishListRepository.save(wish);
		});
	}
}
