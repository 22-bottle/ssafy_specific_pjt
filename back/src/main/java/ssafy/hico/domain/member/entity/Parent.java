package ssafy.hico.domain.member.entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;

@Getter
@Entity
@Table(name = "parent")
@DiscriminatorValue("parent")
public class Parent extends Member{
    @Column(name = "invitation code")
    private String invitationCode;
}