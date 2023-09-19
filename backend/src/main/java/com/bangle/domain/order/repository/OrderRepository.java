package com.bangle.domain.order.repository;

import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bangle.domain.order.entity.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {
}
