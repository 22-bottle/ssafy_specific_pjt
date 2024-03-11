package ssafy.hico.domain.exchangerate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.hico.global.entity.BaseTimeEntity;
import ssafy.hico.global.entity.Country;

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
    private Variation isRise;
    private double amount;
    private LocalDate todayDate;

}
