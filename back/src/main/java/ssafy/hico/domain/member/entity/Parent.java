package ssafy.hico.domain.member.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Getter
@Entity
@Table(name = "parent")
@SuperBuilder
@DiscriminatorValue("parent")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Parent extends Member{

    @Column(name = "invitation code")
    private String invitationCode;
}