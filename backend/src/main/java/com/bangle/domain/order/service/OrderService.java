package com.bangle.domain.order.service;

import com.bangle.global.util.CryptoUtil;
import com.bangle.domain.order.dto.IpfsResponseDTO;
import com.bangle.domain.order.dto.KuboAddResponseDTO;
import com.bangle.domain.order.dto.RegisterRequestDTO;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {

  private final RestTemplate restTemplate;

  @Value("${kubo.rpc.host}")
  private String kuboRpcHost;

  public IpfsResponseDTO upload(RegisterRequestDTO registerRequestDTO) {
    try {
      // encrypt
      SecretKey secretKey = CryptoUtil.createSecretKey();
      IvParameterSpec iv = CryptoUtil.generateIv();
      byte[] encryptedBook = CryptoUtil
          .encryptBook(secretKey, iv, registerRequestDTO.getBook().getBytes());

      // encrypt AES secretKey with member's public key
      String encryptedKeyHex = "";

      // make encryptedBook to file, use docker volume to make spring & kubo use same file path
      // or something??
      String filepath = "";

      // upload to IPFS
      UriComponents uriComponents = UriComponentsBuilder.newInstance()
          .scheme("http")
          .host(kuboRpcHost)
          .path("/api/v0/add")
          .queryParam("arg", filepath)
          .build();
      KuboAddResponseDTO kuboAddResponseDTO = restTemplate.postForObject(
          uriComponents.toString(), new LinkedMultiValueMap<>(), KuboAddResponseDTO.class);

      if (kuboAddResponseDTO != null) {
        return new IpfsResponseDTO(encryptedKeyHex, kuboAddResponseDTO.getHash());
      } else {
        return new IpfsResponseDTO("", "");
      }
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

}
