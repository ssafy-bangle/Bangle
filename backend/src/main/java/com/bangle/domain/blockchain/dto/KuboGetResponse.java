package com.bangle.domain.blockchain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class KuboGetResponse {
    @JsonProperty
    String data;
}
