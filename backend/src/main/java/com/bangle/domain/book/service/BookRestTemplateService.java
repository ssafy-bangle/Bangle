package com.bangle.domain.book.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bangle.domain.book.dto.BookResponse;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookRestTemplateService {

	private final BookRepository bookRepository;

	public List<BookResponse> getRecommendBooks(String userId){
		List<String> genres = bookRepository.getGenres(userId); // 멤버가 구매한 목록들의 장르만 갖고오기
		/**TODO
		 * RestTemplate 으로 장고 서버에 genres 날려서 처리 후에 받아온 genre 들로 해당하는 Book 들 뽑아서 리턴하기
		 */
		return null;
	}
}
