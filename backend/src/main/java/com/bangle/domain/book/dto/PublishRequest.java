package com.bangle.domain.book.dto;

import lombok.Data;

@Data
public class PublishRequest {
  String title;
  Integer price;
  String introduce;
  String genre;
  Integer totalPage;
}
