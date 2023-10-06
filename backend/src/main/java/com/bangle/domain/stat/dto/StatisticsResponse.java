package com.bangle.domain.stat.dto;

import com.bangle.domain.book.entity.Book;

public record StatisticsResponse(
        String cover,
        String title,
        int price,
        Long today_views,
        Long today_purchases,
        Long today_reviews,
        Long[] month_purchases,
        Long total_purchases
) {
    public StatisticsResponse(Book book, String today_views, String today_purchases, String today_reviews, Long[] month_purchases, String total_purchases) {
        this(book.getCover(), book.getTitle(), book.getPurchasePrice(), Long.parseLong(today_views), Long.parseLong(today_purchases), Long.parseLong(today_reviews), month_purchases, Long.parseLong(total_purchases));
    }
}
