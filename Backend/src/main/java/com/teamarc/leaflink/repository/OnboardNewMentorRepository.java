package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.OnboardNewMentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OnboardNewMentorRepository extends JpaRepository<OnboardNewMentor, Long> {
}