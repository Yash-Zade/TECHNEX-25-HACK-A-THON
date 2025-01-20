package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
}
