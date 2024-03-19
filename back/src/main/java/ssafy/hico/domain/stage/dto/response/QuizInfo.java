package ssafy.hico.domain.stage.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ssafy.hico.domain.quiz.entity.Difficulty;
import ssafy.hico.domain.quiz.entity.Quiz;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QuizInfo {

    private long quizId;
    private String quizQuestion;
    private String quizAnswer;
    private String quizType;
    private Difficulty quizLevel;
    private double quizPrice;

    public QuizInfo(Quiz quiz) {
        this.quizId = quiz.getQuizId();
        this.quizQuestion = quiz.getQuizQuestion();
        this.quizAnswer = quiz.getQuizAnswer();
        this.quizType = quiz.getQuizType();
        this.quizLevel = quiz.getQuizLevel().getQuizLevel();
        this.quizPrice = quiz.getQuizLevel().getQuizPrice();
    }

}
