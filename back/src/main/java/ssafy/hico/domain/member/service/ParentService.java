package ssafy.hico.domain.member.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.account.entity.Account;
import ssafy.hico.domain.account.repository.AccountRepository;
import ssafy.hico.domain.member.dto.request.BankAccountBalanceRequest;
import ssafy.hico.domain.member.dto.response.AccountBalanceResponse;
import ssafy.hico.domain.member.entity.Member;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.domain.transaction.dto.response.FrTransactionResponse;
import ssafy.hico.domain.transaction.dto.response.PageParentFrTranResponse;
import ssafy.hico.domain.transaction.dto.response.ParentFrTranAndAccountResponse;
import ssafy.hico.domain.transaction.repository.FrTransactionRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

        List<Member> children = memberRepository.findByParentId(memberId);
        List<Long> childIds = children.stream().map(Member::getId).collect(Collectors.toList());
        Pageable pageable = PageRequest.of(1, 10, Sort.by("createTime").descending());
        Page<PageParentFrTranResponse> pageResponse = frTransactionRepository.findByChildMemberIds(childIds, pageable);

        return ParentFrTranAndAccountResponse.builder().accountNo(account.getAccountNo())
                .balance(accountBalanceResponse.getREC().getAccountBalance())
                .totalElements(pageResponse.getTotalElements())
                .totalPages(pageResponse.getTotalPages())
                .frTranList(pageResponse.getContent()).build();

    }

    public FrTransactionResponse getAccountTranInfoByPage(Long memberId, int page) {
        List<Member> children = memberRepository.findByParentId(memberId);
        List<Long> childIds = children.stream().map(Member::getId).collect(Collectors.toList());
        Pageable pageable = PageRequest.of(page, 10, Sort.by("createTime").descending());
        Page<PageParentFrTranResponse> pageResponse = frTransactionRepository.findByChildMemberIds(childIds, pageable);

        return FrTransactionResponse.builder()
                .totalElements(pageResponse.getTotalElements())
                .totalPages(pageResponse.getTotalPages())
                .frTranList(pageResponse.getContent()).build();
    }
}
