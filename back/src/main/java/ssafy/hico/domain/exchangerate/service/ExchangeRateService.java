package ssafy.hico.domain.exchangerate.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import ssafy.hico.domain.exchangerate.dto.response.ExchangeRateApiResponse;
import ssafy.hico.domain.exchangerate.dto.response.ExchangeRateFindResponse;
import ssafy.hico.domain.exchangerate.entity.ExchangeRate;
import ssafy.hico.domain.exchangerate.entity.Variation;
import ssafy.hico.domain.exchangerate.repository.ExchangeRateRepository;
import ssafy.hico.domain.country.entity.Country;
import ssafy.hico.domain.country.repository.CountryRepository;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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
        Mono<ExchangeRateApiResponse[]> response = webClient.get()
                .retrieve()
                .bodyToMono(ExchangeRateApiResponse[].class).log();
        ExchangeRateApiResponse[] exchangeRateDtos = response.block();
        for (ExchangeRateApiResponse dto : exchangeRateDtos) {
            Country country = countryRepository.findByCode(dto.getCurUnit().substring(0, 3))
                    .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_COUNTRY));
            ExchangeRate todayExchangeRate = null;
            try {
                ExchangeRate yesterdayExchangeRate = exchangeRateRepository.findByCountryAndTodayDate(country, yesterday)
                        .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_EXCHANGE_RATE));
                double amount = yesterdayExchangeRate.getBasicRate() - Double.valueOf(dto.getDealBasR().replace(",", ""));
                if (amount > 0) todayExchangeRate = dto.createExchangeRate(country, Variation.INCREASE, amount);
                else if (amount < 0) todayExchangeRate = dto.createExchangeRate(country, Variation.DECREASE, -amount);
                else todayExchangeRate = dto.createExchangeRate(country, Variation.EQUAL, amount);
            } catch (CustomException e) {
                todayExchangeRate = dto.createExchangeRate(country, null, 0);
            } finally {
                exchangeRateRepository.save(todayExchangeRate);
            }
        }
    }

    public List<ExchangeRateFindResponse> findTodayExchangeRate() {
        LocalDate today = LocalDate.now();
        List<ExchangeRate> exchangeRates = exchangeRateRepository.findAllByTodayDate(today)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_EXCHANGE_RATE));
        List<ExchangeRateFindResponse> exchangeRateList = new ArrayList<>();
        for (ExchangeRate exchangeRate : exchangeRates) {
            exchangeRateList.add(new ExchangeRateFindResponse(exchangeRate));
        }
        return exchangeRateList;
    }

    public List<ExchangeRateFindResponse> findMonthExchangeRate(int countryId) {
        LocalDate today = LocalDate.now();
        Country country = countryRepository.findById(countryId)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_COUNTRY));
        List<ExchangeRate> exchangeRates = exchangeRateRepository.findAllByCountryAndTodayDateBetween(country, today.minusDays(30), today)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_EXCHANGE_RATE));
        List<ExchangeRateFindResponse> exchangeRateList = new ArrayList<>();
        for (ExchangeRate exchangeRate : exchangeRates) {
            exchangeRateList.add(new ExchangeRateFindResponse(exchangeRate));
        }
        return exchangeRateList;
    }

}
