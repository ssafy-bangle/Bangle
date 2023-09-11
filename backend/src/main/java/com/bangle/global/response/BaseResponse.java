package com.bangle.global.response;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class BaseResponse {

    public static ResponseEntity<?> ok(HttpStatus status, String msg) {
        SuccessResponse response = new SuccessResponse(true, msg, null);
        return ResponseEntity.status(status.value()).body(response);
    }

    public static ResponseEntity<?> okWithHeaders(HttpStatus status, String msg, Map<String, String> headers,
                                                  Object data) {
        SuccessResponse response = new SuccessResponse(true, msg, data);
        ResponseEntity.BodyBuilder bodyBuilder = ResponseEntity.status(status.value());
        headers.forEach(bodyBuilder::header);
        return bodyBuilder.body(response);
    }

    public static ResponseEntity<?> okWithData(HttpStatus status, String msg, Object data) {
        SuccessResponse response = new SuccessResponse(true, msg, data);
        return ResponseEntity.status(status.value()).body(response);
    }

    public static ResponseEntity<?> fail(String msg, int status) {
        FailResponse response = new FailResponse(false, msg, status);
        return ResponseEntity.status(status).body(response);
    }
}
