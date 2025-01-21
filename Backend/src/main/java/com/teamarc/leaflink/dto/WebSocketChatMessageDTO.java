package com.teamarc.leaflink.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WebSocketChatMessageDTO {
    private String sender;
    private String content;
    private String type;
}