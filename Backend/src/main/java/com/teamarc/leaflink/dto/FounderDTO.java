package com.teamarc.leaflink.dto;

import lombok.Data;

import java.util.List;

@Data
public class FounderDTO {
    private Long id;

    private UserDTO user;

    private String bio;

    private List<StartUpDTO> startups;

}
