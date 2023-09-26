package com.bangle.domain.stat.controller;

import com.bangle.domain.member.repository.MemberRepository;
import com.bangle.domain.stat.dto.StatisticsResponse;
import com.bangle.domain.stat.service.StatisticsService;
import com.bangle.global.auth.security.CustomMemberDetails;
import com.bangle.global.response.BaseResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/stat")
public class StatisticsController {

  private final MemberRepository memberRepository;
  private final StatisticsService statisticsService;

  @GetMapping
  public ResponseEntity<?> getStat(@AuthenticationPrincipal CustomMemberDetails member) {

    try {
      List<StatisticsResponse> statisticsResponses = statisticsService.getStat(member.getPK());

      return BaseResponse.okWithData(HttpStatus.OK, "통계 조회 성공", statisticsResponses);
    } catch(Exception e) {
      e.printStackTrace();
      return BaseResponse.fail(HttpStatus.BAD_REQUEST, "통계 조회 실패");
    }
  }
}
