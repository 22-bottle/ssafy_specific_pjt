package ssafy.hico.domain.member.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import ssafy.hico.global.bank.dto.request.Header;

@Data
@Builder
@AllArgsConstructor
public class ParentAccountTransferRequest {
    @JsonProperty("Header")
    Header header;
    private String depositBankCode;
    private String depositAccountNo;
    private int transactionBalance;
    private String withdrawalBankCode;
    private String withdrawalAccountNo;
}
