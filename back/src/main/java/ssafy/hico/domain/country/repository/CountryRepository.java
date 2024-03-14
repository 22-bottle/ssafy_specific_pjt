package ssafy.hico.domain.country.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.hico.domain.country.entity.Country;

import java.util.Optional;

public interface CountryRepository extends JpaRepository<Country, Integer> {

    Optional<Country> findByCode(String curUnit);

}
