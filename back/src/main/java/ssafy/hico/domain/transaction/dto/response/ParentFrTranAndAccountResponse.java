package ssafy.hico.domain.transaction.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class ParentFrTranAndAccountResponse {
    private String accountNo;
    private String balance;
    private List<ChildFrTranResponse> frTranList;
}
