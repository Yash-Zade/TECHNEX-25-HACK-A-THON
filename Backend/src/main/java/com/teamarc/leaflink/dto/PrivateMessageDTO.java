package com.teamarc.leaflink.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PrivateMessageDTO {


    private Long messageId;
    private Long sender;
    private Long receiver;
    private String messageContent;
    private LocalDateTime timestamp;

}
