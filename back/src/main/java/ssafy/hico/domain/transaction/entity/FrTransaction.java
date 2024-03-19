package ssafy.hico.domain.transaction.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.hico.domain.country.entity.Country;
import ssafy.hico.domain.wallet.entity.FrWallet;
import ssafy.hico.global.entity.BaseTimeEntity;


import static jakarta.persistence.FetchType.LAZY;

@Getter
@Entity
@NoArgsConstructor
public class FrTransaction extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "country_id")
    private Country country;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "fr_wallet_id")
    private FrWallet frWallet;

    private int balance;

    private double frBalance;
    private Boolean isTransacted;

    @Builder
    public FrTransaction(Country country, FrWallet frWallet, int balance, double frBalance){
        this.country = country;
        this.frWallet = frWallet;
        this.balance = balance;
        this.frBalance = frBalance;
    }
}
