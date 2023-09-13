package com.bangle.domain.bookshelf.service;

import com.bangle.domain.bookshelf.dto.BookshelfResponse;
import com.bangle.domain.bookshelf.repository.BookshelfDetailRepositoryCustom;
import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.service.MemberService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookshelfService {

    private final MemberService memberService;
    private final BookshelfDetailRepositoryCustom bookshelfDetailRepositoryCustom;

    public List<BookshelfResponse> list(String userId) {
        Member findUser = memberService.findByUserId(userId);
        System.out.println(findUser.getId());

        List<BookshelfResponse> bookshelfResponses = bookshelfDetailRepositoryCustom.findBookshelfByMemberId(findUser);

        System.out.println(bookshelfResponses);

        for (BookshelfResponse bookshelfResponse:
        bookshelfResponses) {
            System.out.println(bookshelfResponse.toString());
        }

        return bookshelfResponses;
    }

}
