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
@AllArgsConstructor
@NoArgsConstructor
public class Investment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "investor_id", nullable = false)
    private Investor investor;

    @ManyToOne
    @JoinColumn(name = "startup_id", nullable = false)
    private StartUp startup;

    @Column(nullable = false)
    private Double amount;

    @Column(nullable = false)
    private Double equity;

    @Column(nullable = false)
    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private InvestmentStatus status;

}
