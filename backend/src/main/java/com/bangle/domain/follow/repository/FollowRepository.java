package com.bangle.domain.follow.repository;

import com.bangle.domain.follow.entity.Follow;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {

    Optional<Follow> findByMemberIdAndAuthorId(Long memberId, long authorId);
}
