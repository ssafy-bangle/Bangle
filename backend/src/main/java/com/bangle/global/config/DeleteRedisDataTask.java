package com.bangle.global.config;

import java.time.LocalDate;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DeleteRedisDataTask {

    private final RedisTemplate<String, String> template;

    @Scheduled(cron = "0 0 0 1/1 * ?") // 매일 00:00시에 실행
    public void deleteRedisDataDaily() {
        String keyPattern = "*today*";
        Set<String> keysToDelete = template.keys(keyPattern);
        template.delete(keysToDelete);
    }

    @Scheduled(cron = "0 0 0 1 1/1 ?") // 매월 1일 00:00시에 실행
    public void deleteRedisDataMonth() {
        int currentMonth = LocalDate.now().getMonth().getValue();
        String keyPattern = "*:month_purchases:" + currentMonth;
        Set<String> keysToDelete = template.keys(keyPattern);
        template.delete(keysToDelete);
    }
}