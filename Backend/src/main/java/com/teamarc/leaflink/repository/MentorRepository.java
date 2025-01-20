package com.teamarc.leaflink.repository;


import com.teamarc.leaflink.entity.Mentor;
import com.teamarc.leaflink.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MentorRepository extends JpaRepository<Mentor, Long> {
    Optional<Mentor> findByUser(User user);

}
