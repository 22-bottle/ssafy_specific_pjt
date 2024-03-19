package ssafy.hico.domain.point.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.hico.domain.wallet.entity.FrWallet;
import ssafy.hico.global.entity.BaseTimeEntity;
import ssafy.hico.domain.country.entity.Country;

import static jakarta.persistence.FetchType.LAZY;

@Getter
@Entity
@NoArgsConstructor
public class FrPoint extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long frPointId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "country_id")
    private Country country;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "fr_wallet_id")
    private FrWallet frWallet;

    private double balance;

    @Builder
    public FrPoint(Country country, FrWallet frWallet, double balance){
        this.country = country;
        this.frWallet = frWallet;
        this.balance = balance;
    }

}
