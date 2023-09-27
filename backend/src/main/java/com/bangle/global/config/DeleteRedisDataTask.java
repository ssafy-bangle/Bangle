package com.bangle.global.config;

import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DeleteRedisDataTask {

    private final RedisTemplate<String, String> template;

    @Scheduled(cron = "1 * * * * *") // 매일 오전 3시에 실행
    public void deleteRedisData() {
        // Redis 데이터 삭제 로직을 여기에 작성
        // template을 사용하여 데이터를 삭제
        // 주기적인 스케줄링으로 이 메서드가 실행될 때마다 Redis 데이터가 삭제됨
        String keyPattern = "*today*";
        Set<String> keysToDelete = template.keys(keyPattern);
        template.delete(keysToDelete);
    }
}