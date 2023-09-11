package com.bangle.domain.order.dto;

import lombok.Data;

@Data
public class IpfsResponse {
  String key;
  String address;

  public IpfsResponse(String key, String address) {
    this.key = key;
    this.address = address;
  }
}
