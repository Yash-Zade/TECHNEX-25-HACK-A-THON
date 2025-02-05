package com.teamarc.leaflink.dto;

import com.teamarc.leaflink.entity.enums.InvestmentStatus;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class InvestmentDTO {
    private Long id;

    private InvestorDTO investor;

    private StartUpDTO startup;

    private Double amount;

    private Double equity;

    private LocalDateTime date;

    private InvestmentStatus status;

}
