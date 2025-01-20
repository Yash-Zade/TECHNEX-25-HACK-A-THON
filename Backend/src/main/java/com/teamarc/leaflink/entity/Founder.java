package com.teamarc.leaflink.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Entity
@Getter
@Service
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Founder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User user;

    @Column(length = 1000)
    private String bio;

    private String profilePicture;

    @OneToMany
    private List<StartUp> startups;
}
