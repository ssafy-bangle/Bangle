package com.bangle.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SuccessResponse {
    private boolean success;
    private String msg;
    private Object data;

    public SuccessResponse(String m, Object d) {
        success = true;
        msg = m;
        data = d;
    }
    public SuccessResponse(String m) {
        success = true;
        msg = m;
        data = null;
    }
}
