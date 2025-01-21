package com.teamarc.leaflink.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Investor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "investor", cascade = CascadeType.ALL)
    private List<Investment> investments;

    @ManyToMany
    @JoinColumn(name = "startup_id")
    private List<StartUp> startup;

}