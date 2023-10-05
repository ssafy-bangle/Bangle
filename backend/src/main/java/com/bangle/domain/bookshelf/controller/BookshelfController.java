package com.bangle.domain.bookshelf.controller;

import com.bangle.domain.blockchain.service.IpfsService;
import com.bangle.domain.bookshelf.dto.BookshelfPageResponse;
import com.bangle.domain.bookshelf.dto.BookshelfResponse;
import com.bangle.domain.bookshelf.dto.BookshelfSaveRequest;
import com.bangle.domain.bookshelf.service.BookshelfService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;
import java.util.List;
import java.util.NoSuchElementException;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bookshelf")
public class BookshelfController {

    private final BookshelfService bookshelfService;
    private final IpfsService ipfsService;

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

    // get book view detail
    @GetMapping("/{bookId}")
    public ResponseEntity<?> getBookPageDetail(
            @AuthenticationPrincipal CustomMemberDetails customMemberDetails,
            @PathVariable Long bookId
    ) {
        try {
            BookshelfPageResponse bookshelfPageResponse = bookshelfService
                    .getBookshelfPageResponse(customMemberDetails.getPK(), bookId);
            return BaseResponse.okWithData(HttpStatus.OK, "get book page detail", bookshelfPageResponse);
        } catch (NoSuchElementException e) {
            e.printStackTrace();
            return BaseResponse.fail(HttpStatus.BAD_REQUEST, "book not found");
        }
    }

    @GetMapping("/ipfs/{address}")
    public ResponseEntity<?> getIPFSbook(
        @PathVariable String address
    ) {
        try {
            String encryptedBook = ipfsService.download(address);
            return BaseResponse.okWithData(HttpStatus.OK, "book found", encryptedBook);
        } catch (NoSuchElementException e) {
            e.printStackTrace();
            return BaseResponse.fail(HttpStatus.BAD_REQUEST, "book not found");
        }
    }
}
