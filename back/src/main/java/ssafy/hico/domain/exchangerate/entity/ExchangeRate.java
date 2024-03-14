package ssafy.hico.domain.exchangerate.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.hico.global.entity.BaseTimeEntity;
import ssafy.hico.domain.country.entity.Country;

import java.time.LocalDate;

import static jakarta.persistence.FetchType.LAZY;

@Getter
@Entity
@NoArgsConstructor
public class ExchangeRate extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long exchangeRateId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "country_id")
    private Country country;

    private double basicRate;
    @Enumerated(EnumType.STRING)
    private Variation riseStatus;
    private double amount;
    private LocalDate todayDate;

    @Builder
    public ExchangeRate(Country country, double basicRate, Variation riseStatus, double amount, LocalDate todayDate) {
        this.country = country;
        this.basicRate = basicRate;
        this.riseStatus = riseStatus;
        this.amount = amount;
        this.todayDate = todayDate;
    }

}
