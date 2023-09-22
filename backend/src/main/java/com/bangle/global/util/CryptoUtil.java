package com.bangle.global.util;

import java.math.BigInteger;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Arrays;
import javax.crypto.*;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import lombok.extern.slf4j.Slf4j;
import org.bouncycastle.jce.ECNamedCurveTable;
import org.bouncycastle.jce.spec.ECParameterSpec;
import org.bouncycastle.jce.spec.ECPrivateKeySpec;
import org.bouncycastle.jce.spec.ECPublicKeySpec;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class CryptoUtil {

  private static String serverPrivateKey;

  @Value("${wallet.private}")
  public void setServerPrivateKey(String spk) {
    serverPrivateKey = spk;
  }

  private static PrivateKey getServerPrivateKey()
          throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException {
    BigInteger s = new BigInteger(serverPrivateKey, 16);
    ECParameterSpec ecParameterSpec = ECNamedCurveTable.getParameterSpec("secp256k1");
    ECPrivateKeySpec ecPrivateKeySpec = new ECPrivateKeySpec(s, ecParameterSpec);
    Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
    KeyFactory keyFactory = KeyFactory.getInstance("ECDH", "BC");
    return keyFactory.generatePrivate(ecPrivateKeySpec);
  }

  private static PublicKey toPublicKey(byte[] userPublicKey)
          throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException {
    ECParameterSpec ecParameterSpec = ECNamedCurveTable.getParameterSpec("secp256k1");
    byte[] ecpoint = new byte[65];
    ecpoint[0] = 4;
    System.arraycopy(userPublicKey, 0, ecpoint, 1, 64);
    ECPublicKeySpec ecPublicKeySpec = new ECPublicKeySpec(
            ecParameterSpec.getCurve().decodePoint(ecpoint), ecParameterSpec);
    KeyFactory keyFactory = KeyFactory.getInstance("ECDH", "BC");
    return keyFactory.generatePublic(ecPublicKeySpec);
  }

  public static String generateSharedSecret(byte[] userPublicKey)
          throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException, InvalidKeyException {

    PrivateKey privateKey = getServerPrivateKey();
    PublicKey publicKey = toPublicKey(userPublicKey);

    KeyAgreement keyAgreement = KeyAgreement.getInstance("ECDH", "BC");
    keyAgreement.init(privateKey);
    keyAgreement.doPhase(publicKey, true);
    byte[] sharedSecret = keyAgreement.generateSecret();
    return byteToHex(sharedSecret);
  }

  public static SecretKey createSecretKeyFromSharedSecret(String sharedSecret, byte[] salt, int interationCount)
          throws NoSuchAlgorithmException, InvalidKeySpecException {
    SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
    KeySpec keySpec = new PBEKeySpec(sharedSecret.toCharArray(), salt, interationCount, 256);
//    CharSequence charSequence = Arrays.toString(salt);
//    Pbkdf2PasswordEncoder pbkdf2PasswordEncoder = new Pbkdf2PasswordEncoder(charSequence, 16, 1000,
//            Pbkdf2PasswordEncoder.SecretKeyFactoryAlgorithm.PBKDF2WithHmacSHA256);
//    String encode = pbkdf2PasswordEncoder.encode(sharedSecret);
//    System.out.println("=========================================================================================");
//    System.out.println("NEW ENCODED ENCODE: " + encode);
//    System.out.println("=========================================================================================");
    return new SecretKeySpec(secretKeyFactory.generateSecret(keySpec).getEncoded(), "AES");
  }

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

//  public static PublicKey hexToPrvKey(String privateKeyHex) throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException {
//    ECParameterSpec params = ECNamedCurveTable.getParameterSpec("secp256k1");
//    ECPrivateKeySpec prvKey = new ECPrivateKeySpec(privateKeyHex.getBytes(), params);
////    ECPublicKeySpec prvKey = new ECPrivateKeySpec(
////            params.getCurve().decodePoint(privateKeyHex.getBytes(), params));
////    ECPublicKeySpec prvKey = new ECPublicKeySpec(
////            params.getCurve().decodePoint(publicKeyHex.getBytes()), params);
//    KeyFactory keyFactory = KeyFactory.getInstance("ECDH", "BC");
//    return keyFactory.generatePublic(pubKey);
//  }
//
  public static String byteToHex(byte[] bytes) {
    StringBuilder stringBuilder = new StringBuilder();
    for (byte aByte : bytes) {
      stringBuilder.append(String.format("%02x", aByte));
    }
    return stringBuilder.toString();
  }
}
