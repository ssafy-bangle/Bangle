package com.bangle.domain.blockchain.dto;

import lombok.Data;

@Data
public class IpfsResponse {
  String address;

  public IpfsResponse(String address) {
    this.address = address;
  }
}
