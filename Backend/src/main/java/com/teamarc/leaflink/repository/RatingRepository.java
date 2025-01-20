package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.dto.RatingDTO;
import com.teamarc.leaflink.entity.Mentor;
import com.teamarc.leaflink.entity.Rating;
import com.teamarc.leaflink.entity.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
    Optional<Rating> findBySession(Session session);

    List<Rating> findByMentor(Mentor mentor);

    Optional<RatingDTO> findBySession_SessionId(Long sessionId);
}
