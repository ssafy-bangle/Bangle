package com.bangle.orders;

import lombok.Data;

@Data
public class KuboAddResponseDTO {
  Integer bytes;
  String hash;
  String name;
  String size;
}
