package com.teamarc.leaflink.repository;

import com.teamarc.leaflink.entity.WalletTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WalletTransactionsRepository extends JpaRepository<WalletTransaction, Long> {
    Optional<WalletTransaction> findByTransactionId(String transactionId);
}
