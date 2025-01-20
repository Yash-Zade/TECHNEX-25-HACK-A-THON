package com.teamarc.leaflink.controller;

import com.teamarc.leaflink.dto.PrivateMessageDTO;
import com.teamarc.leaflink.paylod.PrivateMessageRequest;
import com.teamarc.leaflink.services.PrivateMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/private-messages")
public class PrivateMessageController {

    private final PrivateMessageService privateMessageService;

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestBody PrivateMessageRequest privateMessageRequest) {
        return privateMessageService.sendMessage(privateMessageRequest);
    }

    @GetMapping("/get")
    public ResponseEntity<?> getPrivateMessages(@RequestParam Long senderId, @RequestParam Long receiverId) {
        return privateMessageService.getPrivateMessage(senderId, receiverId);
    }

    @MessageMapping("/send-private-message")
    @SendTo("/queue/private")
    public PrivateMessageDTO sendPrivateMessage(PrivateMessageRequest privateMessageRequest) {
        return privateMessageService.sendPrivateMessage(privateMessageRequest);
    }
}