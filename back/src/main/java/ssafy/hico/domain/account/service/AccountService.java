package ssafy.hico.domain.account.service;

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
import ssafy.hico.domain.member.service.MemberService;
import ssafy.hico.global.bank.BankApi;
import ssafy.hico.global.bank.BankApiClient;
import ssafy.hico.global.bank.BankProperties;
import ssafy.hico.global.bank.dto.request.Header;
import ssafy.hico.global.bank.dto.request.HeaderRequest;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final MemberService memberService;
    private final BankApiClient bankApiClient;
    private final BankProperties bankProperties;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AccountRepository accountRepository;


    public void makeAccount(Long memberId, MakeAccountRequest request) {
        Member member = memberService.findById(memberId);
        Header header = bankApiClient.makeHeader(BankApi.OPEN_ACCOUNT.getApiName(), member.getUserKey());

        OpenAccountRequest openAccountRequest = OpenAccountRequest.builder()
                .Header(header)
                .accountTypeUniqueNo(bankProperties.getAccountTypeUniqueNo())
                .build();

        String response = bankApiClient.getResponse(BankApi.OPEN_ACCOUNT.getUrl(), openAccountRequest);

        OpenAccountResponse openAccountResponse = bankApiClient.getDtoFromResponse(response, OpenAccountResponse.class);

        String encryptPassword = bCryptPasswordEncoder.encode(request.getPassword());
        Account account = Account.builder().member(member)
                .accountNo(openAccountResponse.getREC().getAccountNo())
                .password(encryptPassword)
                .bankCode(openAccountResponse.getREC().getBankCode())
                .bankName(bankProperties.getBankName()).build();

        accountRepository.save(account);
    }


    public AccountListResponse getAccountList(Long memberId) {
        Member member = memberService.findById(memberId);
        Header header = bankApiClient.makeHeader(BankApi.INQUIRE_ACCOUNT_LIST.getApiName(), member.getUserKey());
        String response = bankApiClient.getResponse(BankApi.INQUIRE_ACCOUNT_LIST.getUrl(), new HeaderRequest(header));

        return bankApiClient.getDtoFromResponse(response, AccountListResponse.class);
    }

    public void registrationAccount(Long memberId, RegistrationAccountRequest request) {
        Member member = memberService.findById(memberId);

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
