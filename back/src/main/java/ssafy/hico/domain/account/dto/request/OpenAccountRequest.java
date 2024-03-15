package ssafy.hico.domain.account.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import ssafy.hico.global.bank.dto.request.HeaderRequest;

@Getter
@Setter
@Builder
@ToString
public class OpenAccountRequest {
    @JsonProperty("Header")
    private HeaderRequest Header;
    private String accountTypeUniqueNo;
}