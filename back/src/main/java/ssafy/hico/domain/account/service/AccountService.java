package ssafy.hico.domain.account.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.account.dto.request.MakeAccountRequest;
import ssafy.hico.domain.account.dto.request.OpenAccountRequest;
import ssafy.hico.domain.account.dto.response.OpenAccountResponse;
import ssafy.hico.domain.account.entity.Account;
import ssafy.hico.domain.account.repository.AccountRepository;
import ssafy.hico.domain.member.dto.response.BankMemberSearchResponse;
import ssafy.hico.domain.member.entity.Member;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.global.bank.BankApi;
import ssafy.hico.global.bank.BankApiClient;
import ssafy.hico.global.bank.BankProperties;
import ssafy.hico.global.bank.dto.request.HeaderRequest;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final MemberRepository memberRepository;
    private final BankApiClient bankApiClient;
    private final BankProperties bankProperties;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AccountRepository accountRepository;



    public void makeAccount(Long memberId, MakeAccountRequest request) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER));
        HeaderRequest header = bankApiClient.makeHeader(BankApi.OPEN_ACCOUNT.getApiName(), member.getUserKey());

        OpenAccountRequest openAccountRequest = OpenAccountRequest.builder()
                .Header(header)
                .accountTypeUniqueNo(bankProperties.getAccountTypeUniqueNo())
                .build();

        ObjectMapper objectMapper = new ObjectMapper();
//        String response = bankApiClient.getResponse(BankApi.OPEN_ACCOUNT.getUrl(), openAccountRequest);
        String response = response = bankApiClient.getResponse(BankApi.OPEN_ACCOUNT.getUrl(), openAccountRequest);;

        OpenAccountResponse openAccountResponse = null;

        try {
            openAccountResponse = objectMapper.readValue(response, OpenAccountResponse.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        String encryptPassword = bCryptPasswordEncoder.encode(request.getPassword());
        Account account = Account.builder().member(member)
                .accountNo(openAccountResponse.getREC().getAccountNo())
                .password(encryptPassword)
                .bankCode(openAccountResponse.getREC().getBankCode())
                .bankName(bankProperties.getBankName()).build();

        accountRepository.save(account);
    }
}
