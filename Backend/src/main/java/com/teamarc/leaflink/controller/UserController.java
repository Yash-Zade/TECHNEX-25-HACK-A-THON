package com.teamarc.leaflink.controller;


import com.teamarc.leaflink.dto.EmployerDTO;
import com.teamarc.leaflink.dto.MentorProfileDTO;
import com.teamarc.leaflink.dto.OnBoardNewEmployerDTO;
import com.teamarc.leaflink.dto.OnboardNewMentorDTO;
import com.teamarc.leaflink.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
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



}
