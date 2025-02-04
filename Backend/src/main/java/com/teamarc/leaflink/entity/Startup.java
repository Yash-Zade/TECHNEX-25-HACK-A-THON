package com.teamarc.leaflink.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Startup {
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
    private Integer employeeCount;

    @ManyToOne
    @JoinColumn(name = "founder_id", nullable = false)
    private Founder founder;

    @OneToMany(mappedBy = "startup", cascade = CascadeType.ALL)
    private List<Investment> investments;

    @ManyToMany
    @JoinTable(
            name = "startup_investors",
            joinColumns = @JoinColumn(name = "startup_id"),
            inverseJoinColumns = @JoinColumn(name = "investor_id")
    )
    private List<Investor> investors;

    @OneToMany(mappedBy = "startup", cascade = CascadeType.ALL)
    private List<User> teamMembers;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
