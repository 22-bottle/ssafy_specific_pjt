package ssafy.hico.domain.transaction.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.hico.domain.wallet.entity.FrWallet;
import ssafy.hico.global.entity.BaseTimeEntity;

import java.time.LocalDateTime;

import static jakarta.persistence.FetchType.LAZY;

@Getter
@Entity
@NoArgsConstructor
public class FrTransaction extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "fr_wallet_id")
    private FrWallet frWallet;

    private int balance;
    private String isTransacted;

}
