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
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class CryptoUtil {

  private static String serverPrivateKey;

  @Value("${wallet.private}")
  private void setServerPrivateKey(String privateKey) { serverPrivateKey = privateKey; }

  private static IvParameterSpec generateIv() {
    byte[] iv = new byte[16];
    new SecureRandom().nextBytes(iv);
    return new IvParameterSpec(iv);
  }

  private static PrivateKey getServerPrivateKey()
          throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException {
    // generate PrivateKey Object from hex string private key
    BigInteger s = new BigInteger(serverPrivateKey, 16);
    ECParameterSpec ecParameterSpec = ECNamedCurveTable.getParameterSpec("secp256k1");
    ECPrivateKeySpec ecPrivateKeySpec = new ECPrivateKeySpec(s, ecParameterSpec);
    // generate
    Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
    KeyFactory keyFactory = KeyFactory.getInstance("ECDH", "BC");
    return keyFactory.generatePrivate(ecPrivateKeySpec);
  }

  private static PublicKey toPublicKey(byte[] userPublicKey)
          throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException {
    ECParameterSpec ecParameterSpec = ECNamedCurveTable.getParameterSpec("secp256k1");
    // add prefix to public key
    byte[] ecpoint = new byte[65];
    ecpoint[0] = 4;
    System.arraycopy(userPublicKey, 0, ecpoint, 1, 64);
    // generate & return public key
    ECPublicKeySpec ecPublicKeySpec = new ECPublicKeySpec(
            ecParameterSpec.getCurve().decodePoint(ecpoint), ecParameterSpec);
    KeyFactory keyFactory = KeyFactory.getInstance("ECDH", "BC");
    return keyFactory.generatePublic(ecPublicKeySpec);
  }

  private static String generateSharedSecret(byte[] userPublicKey)
          throws NoSuchAlgorithmException, NoSuchProviderException, InvalidKeySpecException, InvalidKeyException {

    PrivateKey privateKey = getServerPrivateKey();
    PublicKey publicKey = toPublicKey(userPublicKey);

    KeyAgreement keyAgreement = KeyAgreement.getInstance("ECDH", "BC");
    keyAgreement.init(privateKey);
    keyAgreement.doPhase(publicKey, true);
    byte[] sharedSecret = keyAgreement.generateSecret();
    return byteToHex(sharedSecret);
  }

  public  static SecretKey deriveAESbyPBKDF(String userPublicKeyHex)
          throws NoSuchAlgorithmException, InvalidKeySpecException, NoSuchProviderException, InvalidKeyException {

    // decode user public key
    byte[] decodedUserPublicKey = Hex.decode(userPublicKeyHex);
    // derive AES key from userPublicKeyHex & serverPrivateKy using PBKDF2
    return CryptoUtil.deriveSecretKey(decodedUserPublicKey);
  }


  private static SecretKey deriveSecretKey(byte[] userPublicKey)
          throws NoSuchAlgorithmException, InvalidKeySpecException, NoSuchProviderException, InvalidKeyException {

    String sharedSecret = generateSharedSecret(userPublicKey);
    byte[] salt = Arrays.copyOfRange(userPublicKey, 0, 16);
    SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
    KeySpec keySpec = new PBEKeySpec(sharedSecret.toCharArray(), salt, 1000, 256);
    return new SecretKeySpec(secretKeyFactory.generateSecret(keySpec).getEncoded(), "AES");
  }

  public static byte[] encryptBook(SecretKey secretKey, byte[] book)
          throws NoSuchPaddingException, NoSuchAlgorithmException, IllegalBlockSizeException, BadPaddingException, InvalidAlgorithmParameterException, InvalidKeyException {
    Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(Cipher.ENCRYPT_MODE, secretKey, generateIv());
    return cipher.doFinal(book);
  }

  public static byte[] decryptBook(SecretKey secretKey, byte[] book)
      throws NoSuchPaddingException, NoSuchAlgorithmException,
      InvalidAlgorithmParameterException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
    Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(Cipher.DECRYPT_MODE, secretKey, generateIv());
    return cipher.doFinal(book);
  }

  public static String byteToHex(byte[] bytes) {
    StringBuilder stringBuilder = new StringBuilder();
    for (byte aByte : bytes) {
      stringBuilder.append(String.format("%02x", aByte));
    }
    return stringBuilder.toString();
  }
}
