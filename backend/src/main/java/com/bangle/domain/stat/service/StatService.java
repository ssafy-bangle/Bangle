package com.bangle.domain.stat.service;

import com.bangle.domain.author.entity.Author;
import com.bangle.domain.author.repository.AuthorRepository;
import com.bangle.domain.book.entity.Book;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.stat.dto.StatResponse;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StatService {

    private final RedisTemplate<String, String> template;
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;

    public List<StatResponse> getStat(Long memberId) {
        /*
            1. 멤버의 PK 얻기, 그걸로 authorId 얻기
            2. authorId로 bookId 리스트 얻어오기
            3. bookId로 여러 스탯을 다 가져오기
        */
        Author author = authorRepository.findByMemberId(memberId)
                .orElseThrow(() -> new IllegalArgumentException("저자가 아닙니다"));

        List<Book> bookList = bookRepository.findAllByAuthorId(author.getId())
                .orElseThrow(() -> new IllegalArgumentException("책이 없습니다"));

        List<StatResponse> statResponses = new ArrayList<>();
        for (Book book:bookList) {
            Long bookId = book.getId();
            String today_views = template.opsForSet().size("bookId:" + bookId + ":today_views") + "";
            String today_purchases = template.opsForValue().get("bookId:" + bookId + ":today_purchases");
            if (today_purchases == null) {
                today_purchases = "0";
            }
            String today_reviews = template.opsForValue().get("bookId:" + bookId + ":today_reviews");
            if (today_reviews == null) {
                today_reviews = "0";
            }
            String total_purchases = template.opsForValue().get("bookId:" + bookId + ":total_purchases");
            if (total_purchases == null) {
                total_purchases = "0";
            }
            StatResponse statResponse = new StatResponse(book, today_views, today_purchases, today_reviews, total_purchases);
            statResponses.add(statResponse);
        }
        return statResponses;
    }
}
