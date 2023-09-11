package com.bangle.domain.order.controller;

import com.bangle.domain.order.service.OrderService;
import com.bangle.domain.order.dto.IpfsResponse;
import com.bangle.domain.order.dto.RegisterRequest;
import com.bangle.global.auth.security.CustomMemberDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {

  private final OrderService ordersService;

  @PostMapping("/register")
  public ResponseEntity<?> registerBookFile(
      @AuthenticationPrincipal CustomMemberDetails customMemberDetails,
      RegisterRequest registerRequest) {
    try {
      // need to check file if is real EPUB???
      IpfsResponse ipfsResponse = ordersService
          .upload(registerRequest, customMemberDetails.getPublicKey());
      return new ResponseEntity<>(ipfsResponse, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }
}