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
    private OnBoardNewFounder founder;

    @OneToMany(mappedBy = "onBoardNewStartup", cascade = CascadeType.ALL)
    private List<Investment> investments;

    @ManyToMany
    @JoinTable(
            name = "startup_investors",
            joinColumns = @JoinColumn(name = "startup_id"),
            inverseJoinColumns = @JoinColumn(name = "investor_id")
    )
    private List<Investor> investors;

    @OneToMany
    private List<Applicant> teamMembers;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
