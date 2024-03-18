package ssafy.hico.domain.member.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.account.entity.Account;
import ssafy.hico.domain.account.repository.AccountRepository;
import ssafy.hico.domain.member.dto.request.BankAccountBalanceRequest;
import ssafy.hico.domain.member.dto.response.AccountBalanceResponse;
import ssafy.hico.domain.member.entity.Member;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.domain.transaction.dto.response.ChildFrTranResponse;
import ssafy.hico.domain.transaction.dto.response.ParentFrTranAndAccountResponse;
import ssafy.hico.domain.transaction.entity.FrTransaction;
import ssafy.hico.domain.transaction.repository.FrTransactionRepository;

import ssafy.hico.global.bank.BankApi;
import ssafy.hico.global.bank.BankApiClient;
import ssafy.hico.global.bank.dto.request.Header;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ParentService {

    private final MemberRepository memberRepository;
    private final MemberService memberService;
    private final FrTransactionRepository frTransactionRepository;
    private final AccountRepository accountRepository;
    private final BankApiClient bankApiClient;

    public ParentFrTranAndAccountResponse getParentAccount(Long memberId) {
        Member member = memberService.findById(memberId);
        Account account = accountRepository.findByMember(member).get();

        Header header = bankApiClient.makeHeader(BankApi.INQUIRE_ACCOUNT_BALANCE.getApiName(), member.getUserKey());
        BankAccountBalanceRequest request = new BankAccountBalanceRequest(header, account.getBankCode(), account.getAccountNo());
        String response = bankApiClient.getResponse(BankApi.INQUIRE_ACCOUNT_BALANCE.getUrl(), request);

        AccountBalanceResponse accountBalanceResponse = bankApiClient.getDtoFromResponse(response, AccountBalanceResponse.class);

        List<Long> childIds = memberRepository.findIdsByParentId(memberId);

        List<FrTransaction> transactions = frTransactionRepository.findByChildMemberIds(childIds);

        List<ChildFrTranResponse> list = transactions.stream()
                .map(transaction -> new ChildFrTranResponse(
                        transaction.getId(),
                        transaction.getBalance(),
                        transaction.getCreateTime(),
                        transaction.getIsTransacted(),
                        transaction.getFrWallet().getMember().getId(),
                        transaction.getFrWallet().getMember().getName()
                ))
                .collect(Collectors.toList());

        return ParentFrTranAndAccountResponse.builder()
                .accountNo(account.getAccountNo())
                .balance(accountBalanceResponse.getREC().getAccountBalance())
                .frTranList(list).build();

    }
}
