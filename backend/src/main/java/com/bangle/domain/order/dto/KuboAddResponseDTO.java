package com.bangle.domain.order.dto;

import lombok.Data;

@Data
public class KuboAddResponseDTO {
  Integer bytes;
  String hash;
  String name;
  String size;
}
