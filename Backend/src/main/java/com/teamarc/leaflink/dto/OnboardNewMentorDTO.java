package com.teamarc.leaflink.dto;

import lombok.Data;

import java.util.List;

@Data
public class OnboardNewMentorDTO {
    private List<String> expertise;
    private Integer experience;
}
