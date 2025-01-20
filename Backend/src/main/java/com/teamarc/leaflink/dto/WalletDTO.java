package com.teamarc.leaflink.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class WalletDTO {
    private Long id;
    private UserDTO user;
    private BigDecimal balance;
    private List<WalletTransaction> transactions;
}
