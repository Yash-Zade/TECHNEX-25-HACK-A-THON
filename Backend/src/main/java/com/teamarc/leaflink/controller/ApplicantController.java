package com.teamarc.leaflink.controller;

import com.teamarc.leaflink.dto.*;
import com.teamarc.leaflink.services.ApplicantService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/applicants")
@Secured("ROLE_APPLICANT")
public class ApplicantController {

    private final ApplicantService applicantService;


    @GetMapping(path = "/profile")
    public ResponseEntity<ApplicantDTO> getApplicantProfile() {
        return ResponseEntity.ok(applicantService.getApplicantProfile());
    }

    @PreAuthorize("@applicantService.isOwnerOfProfile(#id)")
    @PutMapping(path = "/profile/{id}")
    public ResponseEntity<ApplicantDTO> updateProfile(@RequestBody Map<String, Object> object, @PathVariable Long id) {
        return ResponseEntity.ok(applicantService.updateProfile(id, object));
    }

    @PostMapping(path = "/jobs/{jobId}/apply")
    public ResponseEntity<JobApplicationDTO> applyForJob(@PathVariable Long jobId, @RequestBody JobApplicationDTO jobApplication) {
        return ResponseEntity.ok(applicantService.applyJob(jobId, jobApplication));
    }

    @PreAuthorize("@applicantService.isOwnerOfApplication(#applicationId)")
    @PostMapping(path = "/jobs/{applicationId}/withdraw")
    public ResponseEntity<JobApplicationDTO> withdrawJobApplication(@PathVariable Long applicationId) {
        return ResponseEntity.ok(applicantService.withdrawApplication(applicationId));
    }


    @GetMapping(path = "/job-applications")
    public ResponseEntity<Page<JobApplicationDTO>> getAllJobApplications(@RequestParam(defaultValue = "0") Integer pageOffset,
                                                                         @RequestParam(defaultValue = "10", required = false) Integer pageSize, Pageable pageable) {
        PageRequest pageRequest = PageRequest.of(pageOffset, pageSize, Sort.by(Sort.Direction.DESC, "appliedDate", "applicationId"));
        return ResponseEntity.ok(applicantService.getAllJobApplications(pageRequest, pageable));
    }


    @PreAuthorize("@applicantService.isOwnerOfApplication(#applicationId)")
    @GetMapping(path = "/applications/{applicationId}/status")
    public ResponseEntity<String> checkApplicationStatus(@PathVariable Long applicationId) {
        String status = applicantService.checkApplicationStatus(applicationId);
        return ResponseEntity.ok(status);
    }


    @PostMapping(path = "/resume/upload")
    public ResponseEntity<String> uploadResume(@RequestParam("file") MultipartFile file) {
        applicantService.uploadResume(file);
        return ResponseEntity.ok("Resume uploaded successfully");
    }


    @PostMapping(path = "/sessions/{sessionId}/request")
    public ResponseEntity<SessionDTO> requestSession(@PathVariable Long sessionId) {
        return ResponseEntity.ok(applicantService.requestSession(sessionId));
    }

    @PreAuthorize("@applicantService.isOwnerOfSession(#sessionId)")
    @PostMapping(path = "/sessions/{sessionId}/rateMentor")
    public ResponseEntity<MentorProfileDTO> rateMentor(@RequestBody RatingDTO ratingDTO, @PathVariable Long sessionId) {
        return ResponseEntity.ok(applicantService.rateMentor(ratingDTO, sessionId));
    }

    @PreAuthorize("@applicantService.isOwnerOfSession(#sessionId)")
    @PostMapping(path = "/sessions/{sessionId}/join")
    public ResponseEntity<SessionDTO> joinSession(@PathVariable Long sessionId, @RequestParam String otp) {
        return ResponseEntity.ok(applicantService.joinSession(sessionId, otp));
    }

    @PreAuthorize("@applicantService.isOwnerOfSession(#sessionId)")
    @PostMapping(path = "/sessions/{sessionId}/end")
    public ResponseEntity<SessionDTO> endSession(@PathVariable Long sessionId) {
        return ResponseEntity.ok(applicantService.endSession(sessionId));
    }

    @PreAuthorize("@applicantService.isOwnerOfSession(#sessionId)")
    @PostMapping(path = "/sessions/{sessionId}/cancle")
    public ResponseEntity<SessionDTO> cancleSession(@PathVariable Long sessionId) {
        return ResponseEntity.ok(applicantService.cancelSession(sessionId));
    }

    @PostMapping(path = "/request/mentor")
    public ResponseEntity<MentorProfileDTO> requestToBeAMentor(@RequestBody OnboardNewMentorDTO mentorRequestDTO) {
        applicantService.requestMentorOnboard(mentorRequestDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "/request/employer")
    public ResponseEntity<EmployerDTO> requestToBeAEmployer(@RequestBody OnBoardNewEmployerDTO employerRequestDTO) {
        applicantService.requestEmployerOnboard(employerRequestDTO);
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = "/wallet")
    public ResponseEntity<WalletDTO> getWallet() {
        return ResponseEntity.ok(applicantService.getWallet());
    }
}