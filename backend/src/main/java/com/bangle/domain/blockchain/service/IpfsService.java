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

    public byte[] downloadServerFileOf(Long bookId) throws IOException {
        String address = bookRepository.findById(bookId)
                .orElseThrow(NoSuchElementException::new)
                .getAddress();
        String text = getFileFromIPFS(bookRepository.findById(bookId)
                .orElseThrow(NoSuchElementException::new)
                .getAddress());

        if (text == null) {
            return null;
        }
        byte[] decoded = text.getBytes();
        byte[] decodedUTF = text.getBytes(StandardCharsets.UTF_8);
//        String copied = text.substring(0, 50);
//        String star = text.substring(0, 1840);
//        String temp = text.substring(1840, 1940);
//        byte[] temp2 = Arrays.copyOfRange(text.getBytes(StandardCharsets.UTF_8), 0, 50);
//        System.out.println("text: ");
//        System.out.println(copied);
//        System.out.println("download: ");
//        System.out.println(temp.toString());
//        System.out.println(temp2.toString());
//        for (byte b : temp2) {
//            System.out.print(b + " ");
//        }
//        System.out.println(star);
//        System.out.println(temp);
        System.out.println(address);
        System.out.println(text.substring(0, 100));
        System.out.println("address length: " + address.length());
        System.out.println("address BYTE length: " + address.getBytes().length);
        System.out.println("address BYTE UTF length: " + address.getBytes(StandardCharsets.UTF_8).length);
        System.out.println("byte length: " + decoded.length);
        System.out.println("byte length UTF: " + decodedUTF.length);
        System.out.println("========================");
        return text.getBytes(StandardCharsets.UTF_8);
    }

    private String getFileFromIPFS(String address) {

        System.out.println("Book Address: " + address);

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
        String responseBody = response.getBody().substring(0, 1840);
        System.out.println("RESPONSE BODY-=========================================");
        System.out.println(responseBody);
        String after = response.getBody().substring(1840, 3680);
        System.out.println("AFTER BODY -==========================================");
        System.out.println(after);
        System.out.println("string length: " + response.getBody().length());
//        System.out.println("byted: " + response.getBody().getBytes());
        System.out.println("byted length: " + response.getBody().getBytes().length);
        System.out.println(response.getHeaders().keySet());
        for (String key:
        response.getHeaders().keySet()) {
            System.out.println(key);
            System.out.println(response.getHeaders().get(key));
        }
        String text = response.getBody();
        int cl = Integer.parseInt(response.getHeaders().get("X-Content-Length").get(0));
        System.out.println("cl: " + cl);
        return text.substring(text.length() - cl);
    }
}
