package ssafy.hico.domain.member.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "parent")
@DiscriminatorValue("parent")
public class Parent extends Member{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parent_id")
    private Long id;

    @Column(name = "invitation code")
    private String invitationCode;
}