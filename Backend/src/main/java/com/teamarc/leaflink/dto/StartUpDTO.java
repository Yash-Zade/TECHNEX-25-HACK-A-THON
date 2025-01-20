package com.teamarc.leaflink.dto;


import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class StartUpDTO {

    private Long id;

    private String name;

    private String description;

    private String location;

    private String website;

    private String logo;

    private Double fundingGoal;

    private Double currentValuation;

    private String industry;

    private LocalDate foundingDate;

    private FounderDTO founder;

    private List<InvestorDTO> investors;

    private List<InvestmentDTO> investments;
}
