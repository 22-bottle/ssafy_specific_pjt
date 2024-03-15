package ssafy.hico.domain.account.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.account.dto.request.MakeAccountRequest;
import ssafy.hico.domain.account.dto.request.OpenAccountRequest;
import ssafy.hico.domain.account.dto.request.RegistrationAccountRequest;
import ssafy.hico.domain.account.dto.response.AccountListResponse;
import ssafy.hico.domain.account.dto.response.OpenAccountResponse;
import ssafy.hico.domain.account.entity.Account;
import ssafy.hico.domain.account.repository.AccountRepository;
import ssafy.hico.domain.member.entity.Member;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.global.bank.BankApi;
import ssafy.hico.global.bank.BankApiClient;
import ssafy.hico.global.bank.BankProperties;
import ssafy.hico.global.bank.dto.request.Header;
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
        Header header = bankApiClient.makeHeader(BankApi.OPEN_ACCOUNT.getApiName(), member.getUserKey());

        OpenAccountRequest openAccountRequest = OpenAccountRequest.builder()
                .Header(header)
                .accountTypeUniqueNo(bankProperties.getAccountTypeUniqueNo())
                .build();

        ObjectMapper objectMapper = new ObjectMapper();
        String response = bankApiClient.getResponse(BankApi.OPEN_ACCOUNT.getUrl(), openAccountRequest);

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

    public AccountListResponse getAccountList(Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER));
        Header header = bankApiClient.makeHeader(BankApi.INQUIRE_ACCOUNT_LIST.getApiName(), member.getUserKey());

        ObjectMapper objectMapper = new ObjectMapper();
        String response = bankApiClient.getResponse(BankApi.INQUIRE_ACCOUNT_LIST.getUrl(), new HeaderRequest(header));

        try {
            return objectMapper.readValue(response, AccountListResponse.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    public void registrationAccount(Long memberId, RegistrationAccountRequest request) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_USER));

        Account account = Account.builder()
                .member(member)
                .accountNo(request.getAccountNo())
                .bankName(request.getBankName())
                .bankCode(request.getBankCode())
                .password(request.getPassword())
                .build();

        accountRepository.save(account);
    }
}
