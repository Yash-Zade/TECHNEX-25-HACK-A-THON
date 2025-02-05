package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.OnBoardNewStartup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OnBoardNewStartupRepository extends JpaRepository<OnBoardNewStartup, Long> {
}