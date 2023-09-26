package com.bangle.domain.book.dto;

import lombok.Data;

@Data
public class PublishRequest {
  String title;
  String cover;
  Integer price;
  String introduce;
  String genre;
}
