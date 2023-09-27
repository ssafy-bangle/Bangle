package com.bangle.domain.bookshelf.controller;

import com.bangle.domain.bookshelf.dto.BookshelfResponse;
import com.bangle.domain.bookshelf.dto.BookshelfSaveRequest;
import com.bangle.domain.bookshelf.service.BookshelfService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bookshelf")
public class BookshelfController {

    private final BookshelfService bookshelfService;

    @GetMapping("/list")
    public ResponseEntity<?> listBookshelf(@AuthenticationPrincipal CustomMemberDetails member) {

        List<BookshelfResponse> list = bookshelfService.list(member.getPK());

        return BaseResponse.okWithData(HttpStatus.OK, "get list success", list);
    }

    @PostMapping
    public ResponseEntity<?> saveLatestBook(@AuthenticationPrincipal CustomMemberDetails memberDetails, @RequestBody
        BookshelfSaveRequest bookshelfSaveRequest) {
        bookshelfService.saveBook(memberDetails.getPK(), bookshelfSaveRequest);
        return BaseResponse.ok(HttpStatus.OK, "최근 저장 완료");
    }

}
