package com.bangle.domain.order.service;

import com.bangle.global.util.CryptoUtil;
import com.bangle.domain.order.dto.IpfsResponse;
import com.bangle.domain.order.dto.KuboAddResponse;
import com.bangle.domain.order.dto.RegisterRequest;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
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

  public IpfsResponse upload(RegisterRequest registerRequest, String publicKeyHex) {
    try {
      // encrypt book
      SecretKey secretAesKey = CryptoUtil.createSecretKey();
      IvParameterSpec iv = CryptoUtil.generateIv();
      byte[] encryptedBook = CryptoUtil
          .encryptBook(secretAesKey, iv, registerRequest.getBook().getBytes());

      // encrypt AES secretKey with member's public key
      // not working yet
      String encryptedKeyHex = CryptoUtil.encryptAesKey(publicKeyHex, secretAesKey);

      // make encryptedBook to file, use docker volume to make spring & kubo use same file path
//      Path filepath = Paths.get("./books/testbook.epub"); // need to make path unique to file
//      Files.write(filepath, encryptedBook);
//      System.out.println("filepath: " + filepath);

      // upload to IPFS
      // header
      HttpHeaders header = new HttpHeaders();
      header.setContentType(MediaType.MULTIPART_FORM_DATA);
      // body
      LinkedMultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
      body.add("file", encryptedBook);
      // Uri
      UriComponents uriComponents = UriComponentsBuilder.newInstance()
          .scheme("http")
          .host(kuboRpcHost)
          .path("/api/v0/add")
          .build();

      KuboAddResponse kuboAddResponse = restTemplate.postForObject(
          uriComponents.toString(), new HttpEntity<>(body, header), KuboAddResponse.class);
      if (kuboAddResponse != null) {
        return new IpfsResponse(encryptedKeyHex, kuboAddResponse.getHash());
      } else {
        return new IpfsResponse("", "");
      }
    } catch (Exception e) {
      System.out.println(e);
      return new IpfsResponse("", "");
    }
  }

}
