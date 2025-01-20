package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.Applicant;
import com.teamarc.leaflink.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
    Optional<Applicant> findByUser(User user);
}
