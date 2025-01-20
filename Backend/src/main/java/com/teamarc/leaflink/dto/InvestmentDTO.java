package com.teamarc.leaflink.dto;

import com.teamarc.leaflink.entity.enums.InvestmentStatus;
import lombok.Data;

import java.time.LocalDate;

@Data
public class InvestmentDTO {
    private Long id;

    private InvestorDTO investor;

    private StartUpDTO startup;

    private Double amount;

    private Double equity;

    private LocalDate date;

    private InvestmentStatus status;

}
