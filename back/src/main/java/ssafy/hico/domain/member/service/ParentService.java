package ssafy.hico.domain.member.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.account.entity.Account;
import ssafy.hico.domain.account.repository.AccountRepository;
import ssafy.hico.domain.member.dto.request.BankAccountBalanceRequest;
import ssafy.hico.domain.member.dto.request.ParentAccountTransferRequest;
import ssafy.hico.domain.member.dto.request.ParentSendMoneyRequest;
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
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;

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

    public ParentFrTranAndAccountResponse findParentAccount(Long memberId) {
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

    public List<ChildFrTranResponse> findChildExchangeRequestList(Long memberId) {
        List<Long> childIds = memberRepository.findIdsByParentId(memberId);
        List<FrTransaction> transactions = frTransactionRepository.findByChildMemberIdsAndNotTransacted(childIds, PageRequest.of(0, 5));

        return transactions.stream()
                .map(transaction -> new ChildFrTranResponse(
                        transaction.getId(),
                        transaction.getBalance(),
                        transaction.getCreateTime(),
                        transaction.getIsTransacted(),
                        transaction.getFrWallet().getMember().getId(),
                        transaction.getFrWallet().getMember().getName()
                ))
                .collect(Collectors.toList());
    }

    @Transactional
    public void confirmAndSendExchangeToChild(Long memberId, ParentSendMoneyRequest request) {
        Account account = accountRepository.findByMemberId(memberId).get();
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if(!encoder.matches(request.getPassword(), account.getPassword())) {
            throw new CustomException(ErrorCode.INVALID_PASSWORD);
        }

        FrTransaction frTransaction = frTransactionRepository.findById(request.getFrTranId()).get();
        Member child = frTransaction.getFrWallet().getMember();
        Account childAccount = accountRepository.findByMemberId(child.getId()).get();
        Header header = bankApiClient.makeHeader(BankApi.ACCOUNT_TRANSFER.getApiName(), account.getMember().getUserKey());
        ParentAccountTransferRequest requestBody = ParentAccountTransferRequest.builder().header(header)
                .depositAccountNo(childAccount.getBankCode())
                .depositAccountNo(childAccount.getAccountNo())
                .transactionBalance(frTransaction.getBalance())
                .withdrawalBankCode(account.getBankCode())
                .withdrawalAccountNo(account.getAccountNo()).build();

        bankApiClient.getResponse(BankApi.ACCOUNT_TRANSFER.getUrl(), requestBody);

        //입금 성공 후 거래 내역 상태 변화
        frTransactionRepository.updateIsTransacted(request.getFrTranId());

    }

    public String findInvitationCode(Long memberId) {
        return memberService.findById(memberId).getInvitationCode();
    }
}
