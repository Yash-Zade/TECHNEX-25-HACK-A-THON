package com.teamarc.leaflink.repository;


import com.teamarc.leaflink.entity.Applicant;
import com.teamarc.leaflink.entity.JobApplication;
import com.teamarc.leaflink.entity.enums.ApplicationStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {

    Page<JobApplication> findByApplicant(Applicant currentApplicant, PageRequest pageRequest, Pageable pageable);

    Page<JobApplication> findByJob_JobId(Long jobId, PageRequest pageRequest, Pageable pageable);


    Optional<JobApplication> findByJob_JobIdAndApplicant_ApplicantId(Long jobId, Long applicantId);

    @Query("SELECT j FROM JobApplication j " +
            "WHERE j.job.jobId = :jobId " +
            "AND j.applicationStatus = :applicationStatus"
    )
    Page<JobApplication> findByApplicationStatus(Long jobId, ApplicationStatus applicationStatus, PageRequest pageRequest, Pageable pageable);
}
