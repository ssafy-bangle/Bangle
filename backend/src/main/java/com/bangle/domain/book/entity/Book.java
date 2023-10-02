package com.bangle.domain.book.entity;

import java.time.LocalDateTime;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.dto.RestRequest;
import com.bangle.domain.order.entity.OrderStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@ToString
@Table(indexes = {
	@Index(name = "idx_search", columnList = "genre,title")
})
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "author_id")
	private Author author;

	private String title;

	private String genre;

	@Column(length = 1024)
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

	@Column(name = "total_pages")
	private int totalPages;

	@Column(name = "publication_date")
	private LocalDateTime publicationDate;

	public int getPrice(OrderStatus orderStatus) {
		if (orderStatus.equals(OrderStatus.RENT)) {
			return rentalPrice;
		}
		return purchasePrice;
	}
	public BookResponse toResponse() {
		return new BookResponse(this.getId(), this.getTitle(), this.getGenre(), this.getPurchasePrice(),
			this.getRentalPrice(), this.getAverageScore(), this.getCover());
	}
	public RestRequest toRequest(){
		return new RestRequest(this.getId(),this.getTitle(), this.getIntroduction());
	}
}
