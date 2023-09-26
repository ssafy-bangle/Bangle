package com.bangle.domain.order.controller;

import com.bangle.domain.order.dto.OrderRequest;
import com.bangle.domain.order.service.OrderService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {

  private final OrderService ordersService;

  @PostMapping("/book")
  public ResponseEntity<?> orderBook(@AuthenticationPrincipal CustomMemberDetails member,@RequestBody OrderRequest orders) {
    ordersService.order(member.getUsername(), orders);
    return BaseResponse.ok(HttpStatus.OK,"주문 완료");
  }
}
