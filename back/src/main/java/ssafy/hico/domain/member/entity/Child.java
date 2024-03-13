package ssafy.hico.domain.member.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import ssafy.hico.domain.quiz.entity.QuizStatus;
import ssafy.hico.domain.stage.entity.StageStatus;
import ssafy.hico.domain.wallet.entity.FrWallet;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "child")
@SuperBuilder
@DiscriminatorValue("child")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Child extends Member {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Parent parentId;

    @Column(name = "season_num")
    //@ColumnDefault("1")
    private Integer seasonNum;

    @Column(name = "fuel")
    private Integer fuel;

    @Column(name = "is_tutorial")
    private Boolean isTutorial;

    @OneToOne(mappedBy = "child")
    private FrWallet frWallet;

    @OneToMany(mappedBy = "child")
    @Builder.Default
    private List<StageStatus> stageStatuses = new ArrayList<>();

    @OneToMany(mappedBy = "child")
    @Builder.Default
    private List<QuizStatus> quizStatuses = new ArrayList<>();
}