package com.teamarc.leaflink.controller;


import com.teamarc.leaflink.dto.PrivateMessageDTO;
import com.teamarc.leaflink.entity.Message;
import com.teamarc.leaflink.paylod.MessageRequest;
import com.teamarc.leaflink.paylod.PrivateMessageRequest;
import com.teamarc.leaflink.services.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
@CrossOrigin("*")
public class ChatController {

    private final ChatService chatService;


    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message sendMessage(
            @RequestBody MessageRequest request,
            @DestinationVariable Long roomId) {

        return chatService.sendMessage(request, roomId);
    }



    @MessageMapping("/privateMessage")
    @SendTo("/private")
    public PrivateMessageDTO sendPrivateMessage(@RequestBody PrivateMessageRequest request) {
        return chatService.sendPrivateMessage(request);
    }

}
