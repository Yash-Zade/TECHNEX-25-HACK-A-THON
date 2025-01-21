package com.teamarc.leaflink.services;

import com.teamarc.leaflink.dto.AnonymousMessageDTO;
import com.teamarc.leaflink.entity.AnonymousMessage;
import com.teamarc.leaflink.repository.AnonymousMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnonymousMessageService {


    private final AnonymousMessageRepository anonymousMessageRepository;

    private static final String[] RANDOM_NAMES = {"User123", "Guest456", "Anon789"};

    public AnonymousMessageDTO saveMessage(AnonymousMessageDTO messageDTO) {
        String randomName = RANDOM_NAMES[new Random().nextInt(RANDOM_NAMES.length)];
        AnonymousMessage message = AnonymousMessage.builder()
                .name(randomName)
                .message(messageDTO.getMessage())
                .forumId(messageDTO.getForumId())
                .build();
        AnonymousMessage savedMessage = anonymousMessageRepository.save(message);
        return new AnonymousMessageDTO(savedMessage.getId(), savedMessage.getName(), savedMessage.getMessage(), savedMessage.getForumId());
    }

    public List<AnonymousMessageDTO> getMessagesByForumId(Long forumId) {
        return anonymousMessageRepository.findByForumId(forumId);
    }
}