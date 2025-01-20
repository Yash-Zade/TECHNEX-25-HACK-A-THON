package com.teamarc.leaflink.dto;


import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class WalletTransactionDTO {
    private Long id;
    private BigDecimal amount;
    private TransactionType transactionType;
    private SessionDTO session;
    private String transactionId;
    private WalletDTO wallet;
    private LocalDateTime timeStamp;
}
