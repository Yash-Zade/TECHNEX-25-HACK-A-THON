package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.OnBoardNewFounder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OnBoardNewFounderRepository extends JpaRepository<OnBoardNewFounder,Long> {

}
