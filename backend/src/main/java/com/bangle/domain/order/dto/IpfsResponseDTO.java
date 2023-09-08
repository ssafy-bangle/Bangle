package com.bangle.domain.order.dto;

import lombok.Data;

@Data
public class IpfsResponseDTO {
  String key;
  String address;

  public IpfsResponseDTO(String key, String address) {
    this.key = key;
    this.address = address;
  }
}
