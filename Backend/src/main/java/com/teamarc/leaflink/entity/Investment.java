package com.teamarc.leaflink.entity;

import com.teamarc.leaflink.entity.enums.InvestmentStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Investment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;

    @ManyToOne
    @JoinColumn(name = "investor_id", nullable = false)
    private Investor investor;

    @ManyToOne
    @JoinColumn(name = "startup_id", nullable = false)
    private Startup startup;

    @OneToOne(mappedBy = "investment", cascade = CascadeType.ALL)
    private WalletTransaction payment;

    @ManyToOne
    @JoinColumn(name = "on_board_new_investor_id", nullable = false)
    private OnBoardNewInvestor onBoardNewInvestor;

    @ManyToOne
    @JoinColumn(name = "on_board new startup_id", nullable = false)
    private OnBoardNewStartup onBoardNewStartup;
}
