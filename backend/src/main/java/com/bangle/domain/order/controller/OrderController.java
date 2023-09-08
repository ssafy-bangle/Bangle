package com.bangle.domain.order.controller;

import com.bangle.domain.order.service.OrderService;
import com.bangle.domain.order.dto.IpfsResponseDTO;
import com.bangle.domain.order.dto.RegisterRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {

  private final OrderService ordersService;

  @GetMapping("")
  public ResponseEntity<?> what() {
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @PostMapping("/register")
  public ResponseEntity<?> registerBookFile(
      RegisterRequestDTO registerRequestDTO) {
    try {
      // need to check file if is real EPUB
      IpfsResponseDTO ipfsResponseDTO = ordersService.upload(registerRequestDTO);
      return new ResponseEntity<>(ipfsResponseDTO, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }
}
