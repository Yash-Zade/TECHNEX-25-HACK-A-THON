package com.teamarc.leaflink.services;

import com.teamarc.leaflink.dto.*;
import com.teamarc.leaflink.entity.*;
import com.teamarc.leaflink.entity.enums.Role;
import com.teamarc.leaflink.exceptions.ResourceNotFoundException;
import com.teamarc.leaflink.repository.*;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final OnboardNewEmployerRepository onboardNewEmployerRepository;
    private final OnboardNewMentorRepository onboardNewMentorRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final OnBoardNewInvestorRepository onBoardNewInvestorRepository;
    private final OnBoardNewFounderRepository onBoardNewFounderRepository;
    private final OnBoardNewStartupRepository onBoardNewStartupRepository;
    private final ApplicantService applicantService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username).orElse(null);
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }

    public void requestEmployerOnboard(OnBoardNewEmployerDTO onboardNewEmployerDTO) {
        onboardNewEmployerRepository.save(modelMapper.map(onboardNewEmployerDTO, OnboardNewEmployer.class));
    }

    public void requestMentorOnboard(OnboardNewMentorDTO onboardNewMentorDTO) {
        onboardNewMentorRepository.save(modelMapper.map(onboardNewMentorDTO, OnboardNewMentor.class));
    }

    public User loadUserByRole(Role role) {
        return userRepository.findByRoles(role);
    }

    public void requestInvestorOnboard(OnBoardNewInvestorDTO investorRequestDTO) {
        onBoardNewInvestorRepository.save(modelMapper.map(investorRequestDTO, OnBoardNewInvestor.class));
    }

    public void requestFounderOnboard(OnBoardNewFounderDTO founderRequestDTO) {
        onBoardNewFounderRepository.save(modelMapper.map(founderRequestDTO, OnBoardNewFounder.class));
    }

    public void requestStartupOnboard(OnBoardNewStartupDTO startupRequestDTO) {
        onBoardNewStartupRepository.save(modelMapper.map(startupRequestDTO, OnBoardNewStartup.class));
    }

    public void requestApplicantOnboard(Long userId) {
        User user=userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        applicantService.createNewApplicant(user);
    }
}
