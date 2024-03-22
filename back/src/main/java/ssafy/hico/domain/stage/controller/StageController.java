package ssafy.hico.domain.stage.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ssafy.hico.domain.stage.dto.request.StageQuizSaveRequest;
import ssafy.hico.domain.stage.dto.response.StageBookFindResponse;
import ssafy.hico.domain.stage.dto.response.StageChildFindResponse;
import ssafy.hico.domain.stage.dto.response.StageCountryFindResponse;
import ssafy.hico.domain.stage.dto.response.StageQuizFindResponse;
import ssafy.hico.domain.stage.service.StageService;
import ssafy.hico.global.jwt.JwtTokenProvider;
import ssafy.hico.global.response.success.SuccessCode;

import java.util.List;

import static ssafy.hico.global.response.success.CommonResponseEntity.getResponseEntity;

@Slf4j
@RestController
@RequestMapping("/stage")
@RequiredArgsConstructor
public class StageController {

    private final StageService stageService;

    @GetMapping("/child/{childId}")
    public ResponseEntity<?> stageChildDetails(@PathVariable long childId) {
        StageChildFindResponse stageChildFindResponse = stageService.findChildStage(childId);
        return getResponseEntity(SuccessCode.OK, stageChildFindResponse);
    }

    @PatchMapping("/tutorial/{childId}")
    public ResponseEntity<?> stageTutorialModify(@PathVariable long childId) {
        stageService.modifyTutorial(childId);
        return getResponseEntity(SuccessCode.OK);
    }

    @GetMapping("/country/{countryId}")
    public ResponseEntity<?> stageCountryList(@PathVariable int countryId, HttpServletRequest httpServletRequest) {
        Long memberId = (Long) httpServletRequest.getAttribute("memberId");
        List<StageCountryFindResponse> stageList = stageService.findCountryStage(memberId, countryId);
        return getResponseEntity(SuccessCode.OK, stageList);
    }

    @GetMapping("/book/{stageId}")
    public ResponseEntity<?> stageBookList(@PathVariable long stageId) {
        StageBookFindResponse stageBookFindResponse = stageService.findBookStage(stageId);
        return getResponseEntity(SuccessCode.OK, stageBookFindResponse);
    }

    @GetMapping("/quiz/{stageId}")
    public ResponseEntity<?> stageQuizList(@PathVariable int stageId) {
        StageQuizFindResponse stageQuizFindResponse = stageService.findQuizStage(stageId);
        return getResponseEntity(SuccessCode.OK, stageQuizFindResponse);
    }

    @PostMapping("/quiz")
    public ResponseEntity<?> stageQuizSave(@RequestBody StageQuizSaveRequest stageQuizSaveRequest, HttpServletRequest httpServletRequest) {
        Long memberId = (Long) httpServletRequest.getAttribute("memberId");
        stageService.saveStageQuiz(stageQuizSaveRequest, memberId);
        return getResponseEntity(SuccessCode.OK);
    }

}
