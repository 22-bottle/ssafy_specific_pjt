package ssafy.hico.domain.account.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ssafy.hico.domain.account.dto.request.MakeAccountRequest;
import ssafy.hico.domain.account.service.AccountService;
import ssafy.hico.global.annotation.LoginOnly;
import ssafy.hico.global.response.success.SuccessCode;

import static ssafy.hico.global.response.success.CommonResponseEntity.getResponseEntity;

@RestController
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {
    private final AccountService accountService;

    @PostMapping("/make")
    @LoginOnly(level = LoginOnly.Level.ALL)
    public ResponseEntity<?> makeAccount(HttpServletRequest httpServletRequest, @RequestBody MakeAccountRequest request){
        Long memberId = (Long)httpServletRequest.getAttribute("memberId");
        accountService.makeAccount(memberId, request);
        return getResponseEntity(SuccessCode.CREATED);
    }
}
