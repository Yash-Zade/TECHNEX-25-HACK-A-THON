package com.teamarc.leaflink.dto;

import com.teamarc.leaflink.entity.Investment;
import com.teamarc.leaflink.entity.Startup;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Data
public class OnBoardNewInvestorDTO {
    private Long id;
    private Long userId;
    private String bio;

}
