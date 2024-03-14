package ssafy.hico.domain.exchangerate.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.ToString;
import ssafy.hico.domain.country.entity.Country;
import ssafy.hico.domain.exchangerate.entity.ExchangeRate;
import ssafy.hico.domain.exchangerate.entity.Variation;

import java.time.LocalDate;

@Getter
@JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ExchangeRateApiResponseDto {

    private int result;
    private String curUnit;
    private String ttb;
    private String tts;
    private String dealBasR;
    private String bkpr;
    private String yyEfeeR;
    private String tenDdEfeeR;
    private String kftcBkpr;
    private String kftcDealBasR;
    private String curNm;

    public ExchangeRate createExchangeRate(Country country, Variation riseStatus, double amount) {
        return ExchangeRate.builder()
                .country(country)
                .basicRate(Double.valueOf(this.dealBasR.replace(",", "")))
                .riseStatus(riseStatus)
                .amount(amount)
                .todayDate(LocalDate.now())
                .build();
    }

}
