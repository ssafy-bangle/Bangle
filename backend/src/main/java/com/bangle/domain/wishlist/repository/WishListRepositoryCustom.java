package com.bangle.domain.wishlist.repository;

import java.util.List;

import com.bangle.domain.book.dto.BookResponse;

public interface WishListRepositoryCustom {
	List<BookResponse> findAllWishListByMember(Long memberId);
}
