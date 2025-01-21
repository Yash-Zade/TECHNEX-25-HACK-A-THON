package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.OnBoardNewInvestor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OnBoardNewInvestorRepository extends JpaRepository<OnBoardNewInvestor, Long> {
}
