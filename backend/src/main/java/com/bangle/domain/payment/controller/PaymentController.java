package com.bangle.domain.payment.controller;

import com.bangle.domain.payment.dto.PaymentResponse;
import com.bangle.domain.payment.entity.Payment;
import com.bangle.domain.payment.repository.PaymentRepository;
import com.bangle.domain.payment.service.PaymentService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;
import com.bangle.global.response.FailResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/payments")
public class PaymentController {
  private final PaymentService paymentService;

  @GetMapping
  public ResponseEntity<?> getAllPayment(
      @AuthenticationPrincipal CustomMemberDetails customMemberDetails
  ) {
    List<PaymentResponse> paymentResponseList = paymentService.readAllByMember(
        customMemberDetails.getUser());
    return BaseResponse.okWithData(HttpStatus.OK, "???", paymentResponseList);
  }

  @PostMapping("/{amount}")
  public ResponseEntity<?> postPayment(
      @AuthenticationPrincipal CustomMemberDetails customMemberDetails,
      @PathVariable("amount") int amount
  ) {
    try {
      // 결제되었다 치고 포인트 올리기
      paymentService.updatePaymentOf(customMemberDetails.getUser(), amount);
      return BaseResponse.ok(HttpStatus.OK, "update payment success");
    } catch (Exception e) {
      return BaseResponse.fail(HttpStatus.NOT_FOUND, "member not found");
    }
  }

}
