package com.bangle.domain.bookshelf.repository;

import com.bangle.domain.bookshelf.dto.BookshelfResponse;
import com.bangle.domain.bookshelf.entity.Bookshelf;
import com.bangle.domain.member.entity.Member;
import java.util.List;

public interface BookshelfDetailRepositoryCustom {

    List<BookshelfResponse> findBookshelfByMemberId(Long memberId);


}
