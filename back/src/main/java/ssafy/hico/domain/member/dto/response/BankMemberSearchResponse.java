package ssafy.hico.domain.member.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class BankMemberSearchResponse {
//
//    @JsonProperty("payload")
//    private Payload payload;
//
//    @Getter
//    @JsonIgnoreProperties(ignoreUnknown = true)
//    static class Payload {
//        private String userId;
//        private String username;
//        private String institutionCode;
//        private String userKey;
//        private String created;
//        private String modified;
//    }
//
//    @JsonProperty("payload")
//    private Payload payload;
}
