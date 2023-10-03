package com.bangle.domain.payment.repository;

import com.bangle.domain.payment.entity.Payment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
  List<Payment> getAllPaymentByMemberIdOrderByCreatedAtDesc(Long memberId);

}
