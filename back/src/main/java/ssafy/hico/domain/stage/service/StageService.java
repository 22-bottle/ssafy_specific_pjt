package ssafy.hico.domain.stage.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.country.entity.Country;
import ssafy.hico.domain.country.repository.CountryRepository;
import ssafy.hico.domain.member.entity.Member;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.domain.quiz.entity.Quiz;
import ssafy.hico.domain.quiz.entity.QuizStatus;
import ssafy.hico.domain.quiz.repository.QuizRepository;
import ssafy.hico.domain.quiz.repository.QuizStatusRepository;
import ssafy.hico.domain.stage.dto.request.QuizResult;
import ssafy.hico.domain.stage.dto.request.StageQuizSaveRequest;
import ssafy.hico.domain.stage.dto.response.*;
import ssafy.hico.domain.stage.entity.Stage;
import ssafy.hico.domain.stage.entity.StageStatus;
import ssafy.hico.domain.stage.repository.StageRepository;
import ssafy.hico.domain.stage.repository.StageStatusRepository;
import ssafy.hico.global.jwt.JwtTokenProvider;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Component
@RequiredArgsConstructor
public class StageService {

    private final StageRepository stageRepository;
    private final MemberRepository memberRepository;
    private final StageStatusRepository stageStatusRepository;
    private final CountryRepository countryRepository;
    private final QuizRepository quizRepository;
    private final QuizStatusRepository quizStatusRepository;

    private final static int COUNTRY_NUM = 4;

    public StageChildFindResponse findChildStage(long childId) {
        Member child = memberRepository.findById(childId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER));
        List<StageStatus> stageStatuses = stageStatusRepository.findAllByMemberId(childId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER));
        List<ProgressRate> progressRateList = new ArrayList<>();
        int[] progressRates = new int[COUNTRY_NUM];
        for (StageStatus stageStatus : stageStatuses) {
            Country country = stageStatus.getStage().getCountry();
            Long countryId = country.getId();
            int countryIndex = countryId.intValue() - 1;
            if (stageStatus.isPassed()) {
                progressRates[countryIndex] += 20;
            }
        }
        for (Long i = 0L; i < COUNTRY_NUM; i++) {
            Country country = countryRepository.findById(i + 1)
                    .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_COUNTRY));
            progressRateList.add(new ProgressRate(country.getId(), country.getCountryName(), progressRates[i.intValue()]));
        }
        return new StageChildFindResponse(child, progressRateList);
    }

    @Transactional
    public void modifyTutorial(long childId) {
        Member child = memberRepository.findById(childId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER));
        child.modifyTutorial();
    }

    public List<StageCountryFindResponse> findCountryStage(long memberId, long countryId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(()-> new CustomException(ErrorCode.NOT_FOUND_USER));
        Country country = countryRepository.findById(countryId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_COUNTRY));
        List<Stage> stages = stageRepository.findAllByCountry(country)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_STAGE));
        List<StageCountryFindResponse> stageList = new ArrayList<>();
        for (Stage stage : stages) {
            StageStatus stageStatus = stageStatusRepository.findByMemberAndStage(member, stage)
                    .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_STAGE_STATUS));
            List<Quiz> quizzes = quizRepository.findAllByStage(stage)
                    .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_QUIZ));
            int answer = 0;
            for (Quiz quiz : quizzes) {
                Optional<QuizStatus> quizStatus = quizStatusRepository.findByMemberIdAndQuizId(memberId, quiz.getId());
                if (!quizStatus.isEmpty() && quizStatus.get().getIsCorrect()) answer++;
            }
            stageList.add(new StageCountryFindResponse(stage, stageStatus.isPassed(), answer));
        }
        return stageList;
    }

    public StageQuizFindResponse findQuizStage(long stageId) {
        Stage stage = stageRepository.findById(stageId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_STAGE));
        List<Quiz> quizzes = quizRepository.findAllByStage(stage)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_QUIZ));
        List<QuizInfo> quizInfos = new ArrayList<>();
        for (Quiz quiz : quizzes) {
            quizInfos.add(new QuizInfo(quiz));
        }
        return new StageQuizFindResponse(stage.getIncrease(), quizInfos);
    }

    @Transactional
    public void saveStageQuiz(StageQuizSaveRequest stageQuizSaveRequest, long memberId) {
        int answerCnt = 0;
        Member child = memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER));
        for (QuizResult quizResult : stageQuizSaveRequest.getQuizResultList()) {
            Quiz quiz = quizRepository.findById(quizResult.getQuizId())
                    .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_QUIZ));
            Optional<QuizStatus> quizStatus= quizStatusRepository.findByMemberIdAndQuizId(memberId, quiz.getId());
            if (quizResult.isCorrect()) answerCnt++;
            if (quizStatus.isEmpty()) {
                quizStatus = Optional.of(QuizStatus.createQuizStatus(child, quiz, quizResult.isCorrect()));
                quizStatusRepository.save(quizStatus.get());
            } else {
                if (quizResult.isCorrect()) {
                    quizStatus.get().modifyQuizStatus();
                }
            }
        }
        Stage stage = stageRepository.findById(stageQuizSaveRequest.getStageId())
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_STAGE));
        Optional<StageStatus> stageStatus = stageStatusRepository.findByMemberAndStage(child, stage);
        if (stageStatus.isEmpty()) {
            System.out.println(answerCnt);
            if (answerCnt >= 7) {
                stageStatus = Optional.of(StageStatus.createStageStatus(stage, child, true));
            }
            else stageStatus = Optional.of(StageStatus.createStageStatus(stage, child, false));
            stageStatusRepository.save(stageStatus.get());
        } else {
            if (answerCnt >= 7) stageStatus.get().modifyStageStatus();
        }
    }

}
