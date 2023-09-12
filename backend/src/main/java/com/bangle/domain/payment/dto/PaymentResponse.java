package com.bangle.domain.payment.dto;

import com.bangle.domain.payment.entity.Payment;
import java.util.Date;
import lombok.Data;

@Data
public class PaymentResponse {
  public Date createdAt;
  public int amount;

  public PaymentResponse(Payment payment) {
    createdAt = payment.getCreatedAt();
    amount = payment.getAmount();
  }
}
