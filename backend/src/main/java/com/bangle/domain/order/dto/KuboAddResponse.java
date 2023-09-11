package com.bangle.domain.order.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class KuboAddResponse {
  @JsonProperty
  String Hash;
  @JsonProperty
  String Name;
  @JsonProperty
  String Size;
}
