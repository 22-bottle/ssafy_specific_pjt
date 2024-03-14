package ssafy.hico.domain.country.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.hico.domain.country.entity.Country;

public interface CountryRepository extends JpaRepository<Country, Integer> {

    Country findByCode(String curUnit);

}
