package ssafy.hico.domain.member.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import ssafy.hico.global.entity.BaseTimeEntity;

import java.time.LocalDate;

@Getter
@Entity
@Table(name = "member")
@SuperBuilder
@Inheritance(strategy = InheritanceType.JOINED)	// 상속 전략
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DiscriminatorColumn(name="type") // 구분 하는 칼럼
public abstract class Member extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "user_key")
    private String userKey;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name = "refresh_token")
    private String refreshToken;

}