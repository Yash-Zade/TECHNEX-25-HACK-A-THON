package com.teamarc.leaflink.services;


import com.teamarc.leaflink.dto.EmailRequest;
import com.teamarc.leaflink.dto.SessionDTO;
import com.teamarc.leaflink.entity.Session;
import com.teamarc.leaflink.exceptions.ResourceNotFoundException;
import com.teamarc.leaflink.repository.MentorRepository;
import com.teamarc.leaflink.repository.SessionRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.util.ReflectionUtils;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SessionService {


    private final SessionRepository sessionRepository;
    private final ModelMapper modelMapper;
    private final MentorRepository mentorRepository;

    public Page<SessionDTO> getSessions(Integer pageOffset, Integer pageSize) {
        return sessionRepository.findAll(PageRequest.of(pageOffset, pageSize))
                .map(session -> modelMapper.map(session, SessionDTO.class));
    }

    public SessionDTO getSessionById(Long id) {
        return sessionRepository.findById(id)
                .map(session -> modelMapper.map(session, SessionDTO.class))
                .orElseThrow(() -> new RuntimeException("Session not found"));
    }

    @Transactional
    public SessionDTO createSession(SessionDTO sessionDTO) {
        Session session = modelMapper.map(sessionDTO, Session.class);
        session.setMentor(mentorRepository.findById(sessionDTO.getMentorId())
                .orElseThrow(() -> new ResourceNotFoundException("Mentor not found with id: " + sessionDTO.getMentorId())));
        Session savedSession = sessionRepository.save(session);

        EmailRequest emailRequest = EmailRequest.builder()
                .toEmail(savedSession.getMentor().getUser().getEmail())
                .subject("New Session Created")
                .body("A new session has been created with id: " + savedSession.getSessionId())
                .buttonText("View Session")
                .buttonUrl("http://localhost:8080" + savedSession.getSessionId())
                .build();

        return modelMapper.map(savedSession, SessionDTO.class);
    }

    public SessionDTO updateSession(Long id, Map<String, Object> object) {
        Session session = sessionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Session not found with id: " + id));
        object.forEach((key, value) -> {
            Field field = ReflectionUtils.findRequiredField(Session.class, key);
            field.setAccessible(true);
            ReflectionUtils.setField(field, session, value);
        });
        Session updatedSession = sessionRepository.save(session);

        EmailRequest emailRequest = EmailRequest.builder()
                .toEmail(updatedSession.getMentor().getUser().getEmail())
                .subject("Session Updated")
                .body("Your session with id: " + updatedSession.getSessionId() + " has been updated")
                .buttonText("View Session")
                .buttonUrl("http://localhost:8080" + updatedSession.getSessionId())
                .build();
        return modelMapper.map(updatedSession, SessionDTO.class);
    }

}
