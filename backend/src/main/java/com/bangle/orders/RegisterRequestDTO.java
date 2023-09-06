package com.bangle.orders;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class RegisterRequestDTO {
  String title;
  MultipartFile cover;
  Integer price;
  MultipartFile book;
  String introduce;
}
