package com.teamarc.leaflink.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
public class InvestorDTO {
    private Long id;

    private UserDTO user;

    private List<InvestmentDTO> investments;

    private StartUpDTO startup;
}
