package com.bangle.domain.blockchain.service;

import com.bangle.domain.blockchain.dto.KuboGetResponse;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.blockchain.dto.IpfsResponse;
import com.bangle.domain.blockchain.dto.KuboAddResponse;
import com.bangle.global.util.CryptoUtil;
import lombok.RequiredArgsConstructor;
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.crypto.SecretKey;
import java.io.File;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.NoSuchElementException;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class IpfsService {

    private final BookRepository bookRepository;
    private final RestTemplate restTemplate;

    @Value("${kubo.rpc.host}")
    private String kuboRpcHost;
    public IpfsResponse upload(MultipartFile file, String userPublicKeyHex) {
        try {
            // derive key from user public key & server private key
            SecretKey secretAesKey = deriveAESbyPBKDF(userPublicKeyHex);

            // encrypt book
            byte[] encryptedBook = CryptoUtil
                    .encryptBook(secretAesKey, file.getBytes());

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

            if (kuboAddResponse == null) { throw new NullPointerException("ipfs address is null"); }
            return new IpfsResponse(kuboAddResponse.getHash());
        } catch (Exception e) {
            System.out.println(e);
            e.printStackTrace();
            return new IpfsResponse("");
        }
    }

    public MultipartFile downloadServerFile(Long bookId) {
        return getFileFromIPFS(bookRepository.findById(bookId)
                .orElseThrow(NoSuchElementException::new)
                .getAddress()
        );
    }

    private MultipartFile getFileFromIPFS(String address) {

        // upload to IPFS
        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.MULTIPART_FORM_DATA);
        LinkedMultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        UriComponents uriComponents = UriComponentsBuilder.newInstance()
                .scheme("http")
                .host(kuboRpcHost)
                .path("/api/v0/add")
                .queryParam("arg", address)
                .build();
        ResponseEntity<String> response = restTemplate.postForEntity(
                uriComponents.toString(), new HttpEntity<>(body), String.class
        );
        File file = new File(Objects.requireNonNull(response.getBody()));

        return null;
    }
}
