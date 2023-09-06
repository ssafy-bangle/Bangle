package com.bangle.orders;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrdersController {

  private final OrdersService ordersService;

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
