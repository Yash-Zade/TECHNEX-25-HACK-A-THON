package com.teamarc.leaflink.controller;

import com.teamarc.leaflink.dto.AnonymousMessageDTO;
import com.teamarc.leaflink.services.AnonymousMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/anonymousMessages")
public class AnonymousMessageController {


    private final AnonymousMessageService anonymousMessageService;

    @PostMapping
    public AnonymousMessageDTO sendMessage(@RequestBody AnonymousMessageDTO messageDTO) {
        return anonymousMessageService.saveMessage(messageDTO);
    }

    @GetMapping("/forum/{forumId}")
    public List<AnonymousMessageDTO> getMessages(@PathVariable Long forumId) {
        return anonymousMessageService.getMessagesByForumId(forumId);
    }
}