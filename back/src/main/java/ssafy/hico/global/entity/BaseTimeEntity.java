package ssafy.hico.global.entity;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Getter
@MappedSuperclass
public abstract class BaseTimeEntity {
    // Entity가 생성되어 저장될 때 시간이 자동 저장됨
    @CreationTimestamp
    @Column(name = "create_time")
    private LocalDateTime createTime;

    // 조회한 Entity 값을 변경할 때 시간이 자동 저장됨
    @UpdateTimestamp
    @Column(name = "updated_time")
    private LocalDateTime updatedTime;
}
