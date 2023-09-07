package com.bangle.domain.book.domain;

import com.bangle.domain.author.domain.Author;

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
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "author_id")
	private Author author;

	private String title;

	private String genre;

	private String introduction;

	@Column(name = "purchase_price")
	private int purchasePrice;

	private int rentalPrice;

	private String address;

	@Column(name = "average_score")
	private float averageScore;

	private String cover;

	@Column(name = "sale_count")
	private Long saleCount;

}
