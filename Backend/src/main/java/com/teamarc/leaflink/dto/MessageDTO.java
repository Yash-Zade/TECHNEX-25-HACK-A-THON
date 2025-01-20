package com.teamarc.leaflink.dto;

import lombok.Data;

@Data
public class MessageDTO {

    private Long messageId;

    private Long sender;

    private String messageContent;

    private Long chatRoom;

    private String timestamp;
}
