package ssafy.hico.domain.transaction.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ChildForeignTransactionResponse {
    private Long frTranId;
    private int balance;

    private Long countryId;
    private double frBalance;
    private String code;

    private LocalDateTime createTime;
    private boolean isTransacted;
    private Long childId;
    private String name;
}
