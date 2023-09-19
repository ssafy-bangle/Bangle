package com.bangle.domain.order.dto;

import com.bangle.domain.order.entity.OrderStatus;

public record OrderBookRequest(Long bookId, OrderStatus orderStatus) {
}
