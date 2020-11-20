package com.grouppage.domain.notmapped;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grouppage.domain.entity.Group;
import com.grouppage.domain.entity.SignUpForm;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignUpFormLight {
    private long id;
    private long groupId;
    private String nickname;
    private GroupForm form;

    @JsonIgnore
    public static SignUpFormLight fromSignUpForm(SignUpForm signUpForm, long groupId){
        return new SignUpFormLight(signUpForm.getId(),
                groupId,
                signUpForm.getNickname(),
                signUpForm.getForm());
    }
}
