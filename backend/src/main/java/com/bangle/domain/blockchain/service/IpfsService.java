package com.bangle.domain.blockchain.service;

import com.bangle.domain.order.dto.IpfsResponse;
import com.bangle.domain.order.dto.KuboAddResponse;
import com.bangle.domain.book.dto.PublishRequest;
import com.bangle.global.util.CryptoUtil;
import lombok.RequiredArgsConstructor;
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.crypto.SecretKey;
import java.util.Arrays;

@Service
@RequiredArgsConstructor
public class IpfsService {


    private final RestTemplate restTemplate;

    @Value("${kubo.rpc.host}")
    private String kuboRpcHost;

    public IpfsResponse upload(PublishRequest publishRequest, MultipartFile file, String userPublicKeyHex) {
        try {
            // decode user public key
            byte[] decodedUserPublicKey = Hex.decode(userPublicKeyHex);

            // generate shared secret
            String sharedSecret = CryptoUtil.generateSharedSecret(decodedUserPublicKey);

            // generate AES key from shared secret by PK
            byte[] salt = Arrays.copyOfRange(decodedUserPublicKey, 0, 16);
            SecretKey secretAesKey = CryptoUtil.createSecretKeyFromSharedSecret(sharedSecret, salt, 1000);

            // encrypt book
            byte[] encryptedBook = CryptoUtil
                    .encryptBook(secretAesKey, CryptoUtil.generateIv(), file.getBytes());

            // upload to IPFS
            HttpHeaders header = new HttpHeaders();
            header.setContentType(MediaType.MULTIPART_FORM_DATA);
            LinkedMultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
            body.add("file", encryptedBook);
            UriComponents uriComponents = UriComponentsBuilder.newInstance()
                    .scheme("http")
                    .host(kuboRpcHost)
                    .path("/api/v0/add")
                    .build();

            KuboAddResponse kuboAddResponse = restTemplate.postForObject(
                    uriComponents.toString(), new HttpEntity<>(body, header), KuboAddResponse.class
            );

            if (kuboAddResponse == null) {
                throw new NullPointerException("ipfs address is null");
            }
            return new IpfsResponse(sharedSecret, kuboAddResponse.getHash());
        } catch (Exception e) {
            System.out.println(e);
            e.printStackTrace();
            return new IpfsResponse("", "");
        }
    }
}
