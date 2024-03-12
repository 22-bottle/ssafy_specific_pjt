package ssafy.hico.domain.member.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BankMemberSearchResponse {
    private String userId;
    private String username;
    private String institutionCode;
    private String userKey;
    private String created;
    private String modified;
}
