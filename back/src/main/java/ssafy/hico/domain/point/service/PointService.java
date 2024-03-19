package ssafy.hico.domain.point.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.point.dto.ChildApplyTranRequest;
import ssafy.hico.domain.point.entity.FrPoint;
import ssafy.hico.domain.point.repository.FrPointRepository;
import ssafy.hico.domain.transaction.entity.FrTransaction;
import ssafy.hico.domain.transaction.repository.FrTransactionRepository;
import ssafy.hico.domain.wallet.entity.FrWallet;
import ssafy.hico.domain.wallet.repository.FrWalletRepository;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
@RequiredArgsConstructor
public class PointService {

    private final FrTransactionRepository frTransactionRepository;
    private final FrWalletRepository frWalletRepository;
    private final FrPointRepository frPointRepository;

    @Transactional
    public void addFrTransaction(Long memberId, ChildApplyTranRequest request) {
        FrWallet frWallet = frWalletRepository.findByMemberId(memberId).get();
        for(FrPoint point : frWallet.getFrPoints()){
            if(point.getCountry().getId() == request.getCountryId()){
                BigDecimal balance = point.getBalance().subtract(request.getFrBalance());
                BigDecimal roundedBalance = balance.setScale(2, RoundingMode.HALF_UP);

                if (roundedBalance.compareTo(BigDecimal.ZERO) < 0) {
                    throw new CustomException(ErrorCode.NOT_ENOUGH_BALANCE);
                }
                frPointRepository.updatePoint(point.getFrPointId(), roundedBalance);
                FrTransaction frTransaction = FrTransaction.builder()
                        .country(point.getCountry())
                        .frWallet(frWallet)
                        .balance(request.getBalance())
                        .frBalance(request.getFrBalance()).build();
                frTransactionRepository.save(frTransaction);
                break;
            }
        }


    }
}
