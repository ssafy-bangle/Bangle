package com.bangle.global.util;

import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.spec.ECPoint;
import java.security.spec.InvalidKeySpecException;
import javax.crypto.*;
import javax.crypto.spec.IvParameterSpec;
import lombok.extern.slf4j.Slf4j;
import org.bouncycastle.jce.ECNamedCurveTable;
import org.bouncycastle.jce.spec.ECParameterSpec;
import org.bouncycastle.jce.spec.ECPublicKeySpec;
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

  public static PublicKey hexToPubKey(String publicKeyHex) throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException {
    ECParameterSpec params = ECNamedCurveTable.getParameterSpec("secp256k1");
    ECPublicKeySpec pubKey = new ECPublicKeySpec(
            params.getCurve().decodePoint(publicKeyHex.getBytes()), params);
    KeyFactory keyFactory = KeyFactory.getInstance("ECDH", "BC");
    return keyFactory.generatePublic(pubKey);
  }

  public static String makeSharedSecret(String publicKeyHex, SecretKey serverSecretKey)
          throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException, InvalidKeyException {

    PublicKey publicKey = hexToPubKey(publicKeyHex);

    KeyAgreement keyAgreement = KeyAgreement.getInstance("ECDH", "BC");
    keyAgreement.init(serverSecretKey);
    keyAgreement.doPhase(publicKey, true);
    byte[] sharedSecret = keyAgreement.generateSecret();
    return byteToHex(sharedSecret);
  }

  public static SecretKey deriveAESfromSharedSecret(String sharedSecret) {

  }

  public static String byteToHex(byte[] bytes) {
    StringBuilder stringBuilder = new StringBuilder();
    for (byte aByte : bytes) {
      stringBuilder.append(String.format("%02x", aByte));
    }
    return stringBuilder.substring(1, 50);
  }
}
