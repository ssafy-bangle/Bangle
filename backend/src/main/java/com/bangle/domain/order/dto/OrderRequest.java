package com.bangle.domain.order.dto;

import java.util.List;

public record OrderRequest(List<OrderBookRequest> books) {

}
