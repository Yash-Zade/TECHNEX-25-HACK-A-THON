package com.teamarc.leaflink.controller;


import com.teamarc.leaflink.dto.*;
import com.teamarc.leaflink.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping(path = "/request/mentor")
    public ResponseEntity<MentorProfileDTO> requestToBeAMentor(@RequestBody OnboardNewMentorDTO mentorRequestDTO) {
        userService.requestMentorOnboard(mentorRequestDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "/request/employer")
    public ResponseEntity<EmployerDTO> requestToBeAEmployer(@RequestBody OnBoardNewEmployerDTO employerRequestDTO) {
        userService.requestEmployerOnboard(employerRequestDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "/request/investor")
    public ResponseEntity<InvestorDTO> requestToBeAInvestor(@RequestBody OnBoardNewInvestorDTO investorRequestDTO) {
        userService.requestInvestorOnboard(investorRequestDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "/request/founder")
    public ResponseEntity<FounderDTO> requestToBeAFounder(@RequestBody OnBoardNewFounderDTO founderRequestDTO) {
        userService.requestFounderOnboard(founderRequestDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "/request/startup")
    public ResponseEntity<StartUpDTO> requestToBeAStartup(@RequestBody OnBoardNewStartupDTO startupRequestDTO) {
        userService.requestStartupOnboard(startupRequestDTO);
        return ResponseEntity.ok().build();
    }



}
