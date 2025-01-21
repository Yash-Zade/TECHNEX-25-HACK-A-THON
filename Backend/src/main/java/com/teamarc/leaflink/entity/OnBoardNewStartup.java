package com.teamarc.leaflink.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
public class OnBoardNewStartup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(length = 5000)
    private String description;

    @Column(nullable = false)
    private String location;

    private String website;

    private String logo;

    @Column(nullable = false)
    private Double fundingGoal;

    private Double currentValuation;

    private String industry;

    private LocalDate foundingDate;

    @OneToOne
    private Founder founder;

    @ManyToMany
    private List<Investor> investors;

    @OneToMany
    private List<Investment> investments;

}
