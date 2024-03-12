package ssafy.hico.domain.member.entity;

import jakarta.persistence.*;
import lombok.Getter;
import ssafy.hico.domain.quiz.entity.QuizStatus;
import ssafy.hico.domain.stage.entity.StageStatus;
import ssafy.hico.domain.wallet.entity.FrWallet;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "child")
@DiscriminatorValue("child")
public class Child extends Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "child_id")
    private Long id;

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
    private List<StageStatus> stageStatuses = new ArrayList<>();

    @OneToMany(mappedBy = "child")
    private List<QuizStatus> quizStatuses = new ArrayList<>();
}