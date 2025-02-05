package com.teamarc.leaflink.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class OnBoardNewStartup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String email;
    private String website;
    private String industry;
    private Double totalMoneyToRaise;
    private Double totalMoneyRaised;

    @ManyToOne
    @JoinColumn(name = "founder_id", nullable = false)
    private Founder founder;


    @CreationTimestamp
    private LocalDateTime createdAt;

}
