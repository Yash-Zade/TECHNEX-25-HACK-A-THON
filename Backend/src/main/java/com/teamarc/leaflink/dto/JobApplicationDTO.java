package com.teamarc.leaflink.dto;

import com.teamarc.leaflink.entity.enums.ApplicationStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class JobApplicationDTO {
    private Long applicationId;
    private Long jobId;
    private Long applicantId;
    private ApplicationStatus applicationStatus;
    private LocalDateTime appliedDate;
}