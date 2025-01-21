package com.teamarc.leaflink.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class OnBoardNewStartupDTO {

    private Long id;

    private String name;

    private String description;

    private String location;

    private String website;

    private Double fundingGoal;

    private Double currentValuation;

    private String industry;

    private LocalDate foundingDate;

    private Long founderId;
}
