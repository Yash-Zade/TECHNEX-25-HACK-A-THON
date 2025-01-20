package com.teamarc.leaflink.services;

import com.teamarc.leaflink.dto.*;
import com.teamarc.leaflink.entity.*;

import com.teamarc.leaflink.exceptions.ResourceNotFoundException;
import com.teamarc.leaflink.repository.ApplicantRepository;
import com.teamarc.leaflink.repository.JobApplicationRepository;
import com.teamarc.leaflink.repository.OnboardNewEmployerRepository;
import com.teamarc.leaflink.repository.OnboardNewMentorRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;

import org.springframework.data.util.ReflectionUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;


import java.lang.reflect.Field;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ApplicantService {

    private final ApplicantRepository applicantRepository;
    private final JobApplicationRepository jobApplicationRepository;
    private final ModelMapper modelMapper;

    private final OnboardNewEmployerRepository onboardNewEmployerRepository;
    private final OnboardNewMentorRepository onboardNewMentorRepository;






    public Applicant createNewApplicant(User user) {
        Applicant applicant = Applicant.builder()
                .user(user)
                .jobApplications(null)
                .resume(null)
                .build();
        return applicantRepository.save(applicant);
    }

    public ApplicantDTO updateProfile(Long applicantId, Map<String, Object> updates) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new ResourceNotFoundException("Applicant not found with id: " + applicantId));
        updates.forEach((field, value) -> {
            Field fieldToBeUpdated = ReflectionUtils.findRequiredField(Applicant.class, field);
            fieldToBeUpdated.setAccessible(true);
            ReflectionUtils.setField(fieldToBeUpdated, applicant, value);
        });
        return modelMapper.map(applicantRepository.save(applicant), ApplicantDTO.class);
    }


    public ApplicantDTO getApplicantById(Long applicantId) {
        return modelMapper.map(applicantRepository.findById(applicantId)
                .orElseThrow(() -> new ResourceNotFoundException("Applicant not found with id: " + applicantId)), ApplicantDTO.class);
    }


    public JobApplication getApplicationById(Long applicationId) {
        return jobApplicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Job application not found with id: " + applicationId));
    }

    public boolean isOwnerOfApplication(Long applicationId) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        JobApplication jobApplication = getApplicationById(applicationId);
        ApplicantDTO applicant = getApplicantById(jobApplication.getApplicationId());
        User applicationUser = modelMapper.map(applicant.getUser(), User.class);
        return user.equals(applicationUser);
    }


    public boolean isOwnerOfProfile(Long applicantId) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ApplicantDTO applicant = getApplicantById(applicantId);
        User applicantUser = modelMapper.map(applicant.getUser(), User.class);
        return user.equals(applicantUser);
    }



}