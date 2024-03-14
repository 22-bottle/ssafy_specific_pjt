package ssafy.hico.domain.exchangerate.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import ssafy.hico.domain.exchangerate.dto.ExchangeRateApiResponseDto;
import ssafy.hico.domain.exchangerate.entity.ExchangeRate;
import ssafy.hico.domain.exchangerate.entity.Variation;
import ssafy.hico.domain.exchangerate.repository.ExchangeRateRepository;
import ssafy.hico.domain.country.entity.Country;
import ssafy.hico.domain.country.repository.CountryRepository;

import java.time.LocalDate;

@Service
@Component
@RequiredArgsConstructor
public class ExchangeRateService {

    private final ExchangeRateRepository exchangeRateRepository;
    private final CountryRepository countryRepository;

    private final String URL = "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON";
    private final String APIKEY = "?authkey=0j4LxTQLjeIZ56itctsOy118aX5MM80g";
    private final String SEARCHDATE = "&searchdate=";
    private final String DATA = "&data=AP01";

    public WebClient getBaseUrl(final String url) {
        return WebClient.builder()
                .baseUrl(url)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, String.valueOf(MediaType.APPLICATION_JSON))
                .build()
                .mutate()
                .build();
    }

    @Scheduled(cron = "0 10 11 * * *")
    public void getTodayExchangeRate() {
        LocalDate today = LocalDate.now();
        LocalDate yesterday = today.minusDays(1);
        WebClient webClient = getBaseUrl(URL + APIKEY + SEARCHDATE + today + DATA);
        Mono<ExchangeRateApiResponseDto[]> response = webClient.get()
                .retrieve()
                .bodyToMono(ExchangeRateApiResponseDto[].class).log();
        ExchangeRateApiResponseDto[] exchangeRateDtos = response.block();
        for (ExchangeRateApiResponseDto dto : exchangeRateDtos) {
            Country country = countryRepository.findByCode(dto.getCurUnit().substring(0, 3));
            ExchangeRate todayExchangeRate = null;
            try {
                ExchangeRate yesterdayExchangeRate = exchangeRateRepository.findByCountryAndTodayDate(country, yesterday);
                double amount = yesterdayExchangeRate.getBasicRate() - Double.valueOf(dto.getDealBasR().replace(",", ""));
                if (amount > 0) todayExchangeRate = dto.createExchangeRate(country, Variation.INCREASE, amount);
                else if (amount < 0) todayExchangeRate = dto.createExchangeRate(country, Variation.DECREASE, amount);
                else todayExchangeRate = dto.createExchangeRate(country, Variation.EQUAL, amount);
            } catch (NullPointerException e) {
                todayExchangeRate = dto.createExchangeRate(country, null, 0);
            } finally {
                exchangeRateRepository.save(todayExchangeRate);
            }
        }
    }




}
