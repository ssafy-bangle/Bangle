package com.bangle.domain.review.entity;

import java.time.LocalDateTime;

import com.bangle.domain.book.entity.Book;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.review.dto.ReviewResponse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "book_id")
	private Book book;

	@JoinColumn(name = "member_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Member member;

	private String content;

	private float score;

	private String cover;

	private LocalDateTime createdTime;

	public ReviewResponse toResponse() {
		return ReviewResponse.builder()
			.id(this.id)
			.cover(this.cover)
			.build();
	}
}
