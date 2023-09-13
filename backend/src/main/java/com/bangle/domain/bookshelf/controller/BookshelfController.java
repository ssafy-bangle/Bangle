package com.bangle.domain.bookshelf.controller;

import com.bangle.domain.bookshelf.dto.BookshelfResponse;
import com.bangle.domain.bookshelf.service.BookshelfService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bookshelf")
public class BookshelfController {

    private final BookshelfService bookshelfService;

    @GetMapping("/list")
    public ResponseEntity<?> listBookshelf(@AuthenticationPrincipal CustomMemberDetails member) {

        String userId = member.getUsername();

        List<BookshelfResponse> list = bookshelfService.list(userId);

        return BaseResponse.okWithData(HttpStatus.OK, "get list success", list);
    }

}
