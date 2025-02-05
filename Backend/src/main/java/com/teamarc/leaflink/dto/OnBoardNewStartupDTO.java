package com.teamarc.leaflink.dto;

import com.teamarc.leaflink.entity.*;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class OnBoardNewStartupDTO {

    private Long id;
    private String name;
    private String description;
    private String email;
    private String website;
    private String industry;
    private Double totalMoneyToRaise;
    private Double totalMoneyRaised;
    private OnBoardNewFounder founder;

}
