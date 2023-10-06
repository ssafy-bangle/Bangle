package com.bangle.domain.review.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bangle.domain.book.entity.Book;
import com.bangle.domain.review.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>,ReviewRepositoryCustom {
	List<Review> findAllByBookId(Long bookId);
}
