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

    @Scheduled(cron = "0 0 * * * *") // 매일 오전 12시에 실행
    public void deleteRedisData() {
        String keyPattern = "*today*";
        Set<String> keysToDelete = template.keys(keyPattern);
        template.delete(keysToDelete);
    }
}