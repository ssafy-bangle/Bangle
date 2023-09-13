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
public class PaymentService {
  private final PaymentRepository paymentRepository;

  public List<PaymentResponse> readAllByMember(Member member) {
    return paymentRepository.getAllPaymentByMemberId(member.getId())
        .stream().map(PaymentResponse::new).toList();
  }

  @Transactional
  public void updatePaymentOf(Member member, int amount) {
    member.updateDust(amount);
    paymentRepository.save(Payment.builder().amount(amount).member(member).build());
  }

  // 환전??
}
