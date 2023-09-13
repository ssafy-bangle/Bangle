package com.bangle.global.response;

import java.nio.charset.StandardCharsets;
import java.util.Map;

import org.apache.http.client.methods.HttpHead;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

public class BaseResponse {

    public static ResponseEntity<?> ok(HttpStatus status, String msg) {
        return ResponseEntity.status(status).body(new SuccessResponse(msg));
    }

    public static ResponseEntity<?> okWithHeaders(
        HttpStatus status, String msg, HttpHeaders httpHeaders, Object data) {
        return ResponseEntity.status(status).headers(httpHeaders)
            .body(new SuccessResponse(msg, data));
    }
    public static ResponseEntity<?> okWithHeaders(
        HttpStatus status, String msg, HttpHeaders httpHeaders) {
        return ResponseEntity.status(status).headers(httpHeaders)
            .body(new SuccessResponse(msg, null));
    }

    public static ResponseEntity<?> okWithData(HttpStatus status, String msg, Object data) {
        return ResponseEntity.status(status).body(new SuccessResponse(msg, data));
    }

    public static ResponseEntity<?> fail(HttpStatus status, String msg) {
        return ResponseEntity.status(status).body(new FailResponse(status.getReasonPhrase() + msg));
    }
}
