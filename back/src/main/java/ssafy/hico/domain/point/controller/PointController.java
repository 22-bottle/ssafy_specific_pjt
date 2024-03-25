package ssafy.hico.domain.point.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ssafy.hico.domain.point.dto.ChildApplyTranRequest;
import ssafy.hico.domain.point.service.PointService;
import ssafy.hico.global.annotation.LoginOnly;
import ssafy.hico.global.response.success.SuccessCode;

import static ssafy.hico.global.response.success.CommonResponseEntity.getResponseEntity;

@RestController
@RequestMapping("/point")
@RequiredArgsConstructor
public class PointController {

    private final PointService pointService;

    @GetMapping
    @LoginOnly(level = LoginOnly.Level.CHILD)
    public ResponseEntity<?> getAllPoint(HttpServletRequest httpServletRequest){
        Long memberId = (Long) httpServletRequest.getAttribute("memberId");
        return getResponseEntity(SuccessCode.OK, pointService.findAllPointAndExchangeRate(memberId));
    }

    @PostMapping("/require")
    @LoginOnly(level = LoginOnly.Level.CHILD)
    public ResponseEntity<?> requestTransaction(HttpServletRequest httpServletRequest, @RequestBody ChildApplyTranRequest request){
        Long memberId = (Long) httpServletRequest.getAttribute("memberId");
        pointService.addFrTransaction(memberId, request);
        return getResponseEntity(SuccessCode.CREATED);
    }


}
