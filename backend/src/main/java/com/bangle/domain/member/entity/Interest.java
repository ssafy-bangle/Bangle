package com.bangle.domain.member.entity;

import java.util.ArrayList;
import java.util.List;

import com.bangle.domain.member.dto.InterestRequest;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jnr.a64asm.Mem;
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
@Table(indexes = {
	@Index(name = "idx_user_id", columnList = "member_id"),
})
public class Interest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@JoinColumn(name = "member_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Member member;

	private String interest;

	public static List<Interest> makeInterests(Member member, List<String> genres) {
		List<Interest> interests = new ArrayList<>();
		for (String genre : genres) {
			interests.add(
				Interest.builder()
					.member(member)
					.interest(genre)
					.build()
			);
		}
		return interests;
	}
}
