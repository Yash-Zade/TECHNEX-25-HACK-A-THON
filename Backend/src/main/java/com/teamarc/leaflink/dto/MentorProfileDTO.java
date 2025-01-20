package com.teamarc.leaflink.dto;

import lombok.Data;

import java.util.List;

@Data
public class MentorProfileDTO {

    private Long mentorId;

    private List<String> expertise;

    private UserDTO user;

    private List<SessionDTO> sessions;

    private List<RatingDTO> ratings;

    private Double averageRating;

    private Long totalSessions;

    private String bio;

    private Integer experience;
}
