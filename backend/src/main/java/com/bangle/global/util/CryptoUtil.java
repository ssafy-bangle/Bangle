package com.bangle.global.util;

import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.spec.ECPoint;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class CryptoUtil {
  public static SecretKey createSecretKey() throws NoSuchAlgorithmException {
    KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
    keyGenerator.init(256);
    return keyGenerator.generateKey();
  }

  public static IvParameterSpec generateIv() {
    byte[] iv = new byte[16];
    new SecureRandom().nextBytes(iv);
    return new IvParameterSpec(iv);
  }

  public static byte[] encryptBook(SecretKey secretKey, IvParameterSpec iv, byte[] book)
      throws NoSuchPaddingException, NoSuchAlgorithmException,
      InvalidAlgorithmParameterException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
    Cipher ciper = Cipher.getInstance("AES/CBC/PKCS5Padding");
    ciper.init(Cipher.ENCRYPT_MODE, secretKey, iv);
    return ciper.doFinal(book);
  }

  public static byte[] decryptBook(SecretKey secretKey, IvParameterSpec iv, byte[] book)
      throws NoSuchPaddingException, NoSuchAlgorithmException,
      InvalidAlgorithmParameterException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
    Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(Cipher.DECRYPT_MODE, secretKey, iv);
    return cipher.doFinal(book);
  }

  public static String encryptAesKey(String publicKeyHex, SecretKey secreteAesKey)
      throws NoSuchAlgorithmException, NoSuchProviderException {

    // need to encrypt!

    return byteToHex(secreteAesKey.getEncoded());
  }

  public static String byteToHex(byte[] bytes) {
    StringBuilder stringBuilder = new StringBuilder();
    for (byte aByte : bytes) {
      stringBuilder.append(String.format("%02x", aByte));
    }
    return stringBuilder.substring(1, 50);
  }
}
