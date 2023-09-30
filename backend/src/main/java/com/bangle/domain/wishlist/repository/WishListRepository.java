package com.bangle.domain.wishlist.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.wishlist.entity.WishList;

public interface WishListRepository extends JpaRepository<WishList,Long>,WishListRepositoryCustom {

	Optional<WishList> findByMemberIdAndBookId(Long memberId, Long bookId);
}
