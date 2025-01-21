package com.teamarc.leaflink.controller;

import com.teamarc.leaflink.dto.WebSocketChatMessageDTO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketChatController {

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public WebSocketChatMessageDTO sendMessage(WebSocketChatMessageDTO chatMessage) {
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public WebSocketChatMessageDTO addUser(WebSocketChatMessageDTO chatMessage) {
        chatMessage.setContent(chatMessage.getSender() + " joined!");
        return chatMessage;
    }
}