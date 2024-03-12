package ssafy.hico.domain.member.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import ssafy.hico.global.entity.BaseTimeEntity;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "member")
@Inheritance(strategy = InheritanceType.JOINED)	// 상속 전략
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

    @Column(name = "gender")
    private String gender;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(name = "role")
    private String role;

    @Column(name = "refresh_token")
    private String refreshToken;
}