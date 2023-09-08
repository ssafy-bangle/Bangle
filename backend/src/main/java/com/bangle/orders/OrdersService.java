package com.bangle.orders;

import com.bangle.crypto.CryptoService;
import java.io.File;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@Transactional
@RequiredArgsConstructor
public class OrdersService {

  private final RestTemplate restTemplate;

  @Value("${kubo.rpc.host}")
  private String kuboRpcHost;

  public IpfsResponseDTO upload(RegisterRequestDTO registerRequestDTO) {
    try {
      // encrypt
      SecretKey secretKey = CryptoService.createSecretKey();
      IvParameterSpec iv = CryptoService.generateIv();
      byte[] encryptedBook = CryptoService
          .encryptBook(secretKey, iv, registerRequestDTO.book.getBytes());

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
        return new IpfsResponseDTO(encryptedKeyHex, kuboAddResponseDTO.hash);
      } else {
        return new IpfsResponseDTO("", "");
      }
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

}
