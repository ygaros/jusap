package com.grouppage.domain.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddParticipantRequest {
    @NotNull
    private long conversationId;
    @NotNull
    private long participantId;
}
