package com.bangle.orders;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class TestController {

  @GetMapping("/")
  public ResponseEntity<?> testest() {
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
