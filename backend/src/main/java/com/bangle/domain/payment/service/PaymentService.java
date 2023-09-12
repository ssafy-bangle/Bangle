package com.bangle.domain.payment.service;

import com.bangle.domain.member.entity.Member;
import com.bangle.domain.member.repository.MemberRepository;
import com.bangle.domain.payment.dto.PaymentResponse;
import com.bangle.domain.payment.entity.Payment;
import com.bangle.domain.payment.repository.PaymentRepository;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class PaymentService {
  private final MemberRepository memberRepository;
  private final PaymentRepository paymentRepository;

  public List<PaymentResponse> getAllPaymentByUserId(String userId) {
    return paymentRepository.getAllPaymentByUserId(userId)
        .stream().map(PaymentResponse::new).toList();
  }

  public void postPaymentOf(String userId, int amount) throws NoSuchElementException{
    // find member
    memberRepository.findByUserId(userId).ifPresentOrElse(
        member -> {
          // update member's point
          member.updateDust(amount);
          // make payment
          paymentRepository.save(Payment.builder().amount(amount).member(member).build());
        },
        () -> { throw new NoSuchElementException(); }
    );
    // 환전???
  }
}
