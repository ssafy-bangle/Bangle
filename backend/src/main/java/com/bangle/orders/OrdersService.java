package com.bangle.orders;

import com.bangle.crypto.CryptoService;
import java.io.File;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class OrdersService {


  public IpfsResponseDTO upload(RegisterRequestDTO registerRequestDTO) {
    try {
      SecretKey secretKey = CryptoService.createSecretKey();
      byte[] encoded = secretKey.getEncoded();
      System.out.println("ENCODED: " + CryptoService.byteToHex(encoded));
      IvParameterSpec iv = CryptoService.generateIv();
      byte[] encryptedBook = CryptoService.encryptBook(secretKey, iv,
          registerRequestDTO.book.getBytes());
      byte[] decryptedBook = CryptoService.decryptBook(secretKey, iv,
          encryptedBook);
      // need to upload to IPFS
      String encode = "UTF-8";
      System.out.println("BOOK     : " + registerRequestDTO.book);
      System.out.println("BOOK  STR: " + (new String(registerRequestDTO.book.getBytes(), encode)).substring(1, 50));
      System.out.println("BOOK  HEX: " + CryptoService.byteToHex(registerRequestDTO.book.getBytes()));

      System.out.println("ENC   STR: " + (new String(encryptedBook, encode)).substring(1, 50));
      System.out.println("ENC   HEX: " + CryptoService.byteToHex(encryptedBook));

      System.out.println("DEC   STR: " + (new String(decryptedBook, encode)).substring(1, 50));
      System.out.println("DEC   HEX: " + CryptoService.byteToHex(decryptedBook));


      return new IpfsResponseDTO("testKey", "testAddress");
    } catch (Exception e) {
      System.out.println(e);
      return null;
    }
  }

}
