package com.teamarc.leaflink.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OnBoardNewInvestor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Double totalInvestmentAmount;

    @OneToMany(mappedBy = "onBoardNewInvestor", cascade = CascadeType.ALL)
    private List<Investment> investments;
}
