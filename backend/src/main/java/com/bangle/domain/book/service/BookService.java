package com.bangle.domain.book.service;

import java.util.List;
import java.util.stream.Collectors;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.book.dto.PublishRequest;
import com.bangle.domain.review.service.AwsS3Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.bangle.domain.book.dto.BookAndReviewResponse;
import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.review.entity.Review;
import com.bangle.domain.review.repository.ReviewRepository;
import com.bangle.global.auth.security.CustomMemberDetails;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class BookService {

	private final BookRepository bookRepository;
	private final ReviewRepository reviewRepository;
	private final AwsS3Service awsS3Service;
	private final RedisTemplate<String, String> template;

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

		if (member != null) {
			String key = "bookId:" + id + ":today_views";
			template.opsForSet().add(key, member.getPK() + "");
		}

		BookAndReviewResponse findBookDetail = bookRepository.findDetailBookByIdAndMember(member, id);
		List<Review> review = reviewRepository.findAllByBookId(id);
		findBookDetail.addReview(review);

		return findBookDetail;
	}

	@Transactional
	public void saveBook(Author author, PublishRequest publishRequest, MultipartFile cover, String address) {
		// s3에 저장
		String coverUrl = awsS3Service.uploadImageToS3(cover);

		Book book = Book.builder()
				.title(publishRequest.getTitle())
				.purchasePrice(publishRequest.getPrice())
				.introduction(publishRequest.getIntroduce())
				.genre(publishRequest.getGenre())
				.address(address)
				.author(author)
				.cover(coverUrl)
				.build();
		bookRepository.save(book);
	}
}