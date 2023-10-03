package com.bangle.domain.blockchain.service;

import com.bangle.domain.blockchain.dto.KuboGetResponse;
import com.bangle.domain.book.repository.BookRepository;
import com.bangle.domain.blockchain.dto.IpfsResponse;
import com.bangle.domain.blockchain.dto.KuboAddResponse;
import com.bangle.global.util.CryptoUtil;
import com.fasterxml.jackson.core.util.ByteArrayBuilder;
import java.security.InvalidAlgorithmParameterException;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
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
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import org.web3j.abi.datatypes.Int;

@Service
@RequiredArgsConstructor
public class IpfsService {

    private final BookRepository bookRepository;
    private final RestTemplate restTemplate;

    @Value("${kubo.rpc.host}")
    private String kuboRpcHost;
    public IpfsResponse upload(byte[] encryptedBook) {
        try {
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

    public byte[] downloadServerFileOf(Long bookId) {
        String text = getFileFromIPFS(bookRepository.findById(bookId)
            .orElseThrow(NoSuchElementException::new)
            .getAddress());
        ByteArrayBuilder byteArrayBuilder = new ByteArrayBuilder();
        for (char c : text.toCharArray()) {
            byteArrayBuilder.append(c);
        }
        return byteArrayBuilder.toByteArray();
    }

    private String getFileFromIPFS(String address) {
        // download from IPFS
        LinkedMultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        UriComponents uriComponents = UriComponentsBuilder.newInstance()
            .scheme("http")
            .host(kuboRpcHost)
            .path("/api/v0/get")
            .queryParam("arg", address)
            .queryParam("output", "data/books/")
            .build();
        ResponseEntity<String> response = restTemplate.postForEntity(
            uriComponents.toString(), new HttpEntity<>(body), String.class
        );

        // get encrypted file
        try {
            int contentLength = Integer.parseInt(
                Objects.requireNonNull(response.getHeaders().get("X-Content-Length")).get(0));
            return Objects.requireNonNull(response.getBody()).substring(512, 512 + contentLength);
        } catch (NullPointerException e) {
            e.printStackTrace();
            return "";
        }
    }
}
