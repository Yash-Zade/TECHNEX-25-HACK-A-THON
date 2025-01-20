package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.OnboardNewEmployer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OnboardNewEmployerRepository extends JpaRepository<OnboardNewEmployer, Long> {
}