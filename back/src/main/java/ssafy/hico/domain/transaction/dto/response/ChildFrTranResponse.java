package ssafy.hico.domain.transaction.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ChildFrTranResponse {
    private Long frTranId;
    private int balance;
    private LocalDateTime createTime;
    private String isTransacted;
    private Long memberId;
    private String name;
}
