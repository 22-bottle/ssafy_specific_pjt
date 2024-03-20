package ssafy.hico.domain.member.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.account.entity.Account;
import ssafy.hico.domain.account.repository.AccountRepository;
import ssafy.hico.domain.account.service.AccountService;
import ssafy.hico.domain.member.dto.request.ParentAccountTransferRequest;
import ssafy.hico.domain.member.dto.request.ParentSendMoneyRequest;
import ssafy.hico.domain.member.dto.response.AccountBalanceResponse;
import ssafy.hico.domain.member.entity.Member;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.domain.transaction.dto.response.ChildForeignTransactionResponse;
import ssafy.hico.domain.transaction.dto.response.AccountAndFrTranResponse;
import ssafy.hico.domain.transaction.entity.FrTransaction;
import ssafy.hico.domain.transaction.repository.FrTransactionRepository;

import ssafy.hico.global.bank.BankApi;
import ssafy.hico.global.bank.BankApiClient;
import ssafy.hico.global.bank.dto.request.Header;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ParentService {

    private final MemberRepository memberRepository;
    private final MemberService memberService;
    private final ChildService childService;
    private final FrTransactionRepository frTransactionRepository;
    private final AccountRepository accountRepository;
    private final AccountService accountService;
    private final BankApiClient bankApiClient;

    public AccountAndFrTranResponse findParentAccount(Long memberId) {

        List<Long> childIds = memberRepository.findIdsByParentId(memberId);
        List<FrTransaction> transactions = frTransactionRepository.findByChildMemberIds(childIds);
        List<ChildForeignTransactionResponse> list = childService.changeFrTranToChildFrTran(transactions);

        AccountBalanceResponse accountBalanceResponse = accountService.getAccountBalance(memberId);
        return AccountAndFrTranResponse.builder()
                .accountNo(accountBalanceResponse.getREC().getAccountNo())
                .balance(accountBalanceResponse.getREC().getAccountBalance())
                .frTranList(list).build();
    }

    public List<ChildForeignTransactionResponse> findChildExchangeRequestList(Long memberId) {
        List<Long> childIds = memberRepository.findIdsByParentId(memberId);
        List<FrTransaction> transactions = frTransactionRepository.findByChildMemberIdsAndNotTransacted(childIds, PageRequest.of(0, 5));

        return childService.changeFrTranToChildFrTran(transactions);
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
                .depositBankCode(childAccount.getBankCode())
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

    public List<Long> findChildren(Long memberId) {
        return memberRepository.findIdsByParentId(memberId);
    }
}
