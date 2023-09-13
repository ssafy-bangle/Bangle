package com.bangle.domain.member.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class OicdResponse {
  @JsonProperty("id_token")
  String idToken;

//  @JsonProperty("access_token")
//  String accessToken;
//
//  @JsonProperty("token_type")
//  String tokenType;
//
//  @JsonProperty("refresh_token")
//  String refreshToken;
//
//
//  @JsonProperty("expires_in")
//  Integer expiredIn;
//
//  String scope;
//
//  @JsonProperty("refresh_token_expires_in")
//  Integer refreshTokenExpiresIn;
}