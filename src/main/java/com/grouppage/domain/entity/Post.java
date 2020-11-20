package com.grouppage.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grouppage.domain.converter.HashTagConverter;
import com.grouppage.domain.notmapped.HashTag;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Post extends AbstractEntityDate{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(targetEntity = Group.class, fetch = FetchType.LAZY)
    @JsonIgnore
    private Group group;

    @ManyToOne(targetEntity = Participant.class, fetch = FetchType.LAZY)
    private Participant author;

    @NotNull
    private String content;

    @Convert(converter = HashTagConverter.class)
    private List<HashTag> hashTags;

    @Column(columnDefinition = "integer default 0")
    private int reactionCount;
}
