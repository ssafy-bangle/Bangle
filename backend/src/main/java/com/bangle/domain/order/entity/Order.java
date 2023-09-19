package com.bangle.domain.order.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.bangle.domain.member.entity.Member;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder
@Table(name = "orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_id")
	private Long id;

	@JoinColumn(name = "member_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Member member;

	@Column(name = "order_time")
	private LocalDateTime orderTime;

	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
	private List<OrderBook> orderItems = new ArrayList<>();

	public static Order createOrder(Member member, List<OrderBook> orderBooks, int totalDust) {
		Order order = Order.builder()
			.member(member)
			.orderItems(orderBooks)
			.orderTime(LocalDateTime.now())
			.build();
		member.buyBook(totalDust);
		orderBooks.forEach(orderBook -> orderBook.addOrder(order));
		return order;
	}
}
