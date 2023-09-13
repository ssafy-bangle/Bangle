package com.bangle.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class FailResponse {
    private boolean success;
    private String msg;
    public FailResponse(String m) {
        success = false;
        msg = ": " + m;
    }
}
