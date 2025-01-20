package com.teamarc.leaflink.paylod;

import lombok.*;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MessageRequest {

    public Long sender;
    public String messageContent;
    public Long roomId;
    private String messageTime;

}
