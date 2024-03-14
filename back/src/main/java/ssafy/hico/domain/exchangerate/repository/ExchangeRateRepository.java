package ssafy.hico.domain.exchangerate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.hico.domain.exchangerate.entity.ExchangeRate;
import ssafy.hico.domain.country.entity.Country;

import java.time.LocalDate;

public interface ExchangeRateRepository extends JpaRepository<ExchangeRate, Integer> {

    ExchangeRate findByCountryAndTodayDate(Country country, LocalDate todayDate);

}
