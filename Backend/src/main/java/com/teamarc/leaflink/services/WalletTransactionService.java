package com.teamarc.leaflink.services;

import com.teamarc.leaflink.entity.WalletTransaction;
import com.teamarc.leaflink.repository.WalletTransactionsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class WalletTransactionService {

    private final WalletTransactionsRepository walletTransactionsRepository;

    public void createNewWalletTransaction(WalletTransaction walletTransaction) {
        walletTransactionsRepository.save(walletTransaction);
    }

    public Optional<WalletTransaction> findByTransactionId(String transactionId) {
        return walletTransactionsRepository.findByTransactionId(transactionId);
    }
}
