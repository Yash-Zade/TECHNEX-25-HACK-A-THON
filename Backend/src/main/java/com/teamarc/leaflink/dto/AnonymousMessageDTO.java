package com.teamarc.leaflink.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnonymousMessageDTO {


    private long id;
    private String message;
    private String name;
    private Long forumId;
}
