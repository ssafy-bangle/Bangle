package com.bangle.domain.stat.dto;

import com.bangle.domain.book.entity.Book;

public record StatResponse(
        String cover,
        String title,
        Long today_views,
        Long today_purchases,
        Long today_reviews,
        Long total_purchases
) {
    public StatResponse(Book book, String today_views, String today_purchases, String today_reviews, String total_purchases) {
        this(book.getCover(), book.getTitle(), Long.parseLong(today_views), Long.parseLong(today_purchases), Long.parseLong(today_reviews), Long.parseLong(total_purchases));
    }
}
