package ssafy.hico.global.response.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    /* 예시. 필요한 것 추가해서 사용*/
    TEST_NOT_FOUND(HttpStatus.NOT_FOUND, "전달할 메시지"),

    //회원 관련 예외
    DUPLICATE_EMAIL(HttpStatus.CONFLICT, "이미 존재하는 이메일입니다."),
    NOT_FOUND_CODE(HttpStatus.NOT_FOUND, "존재하는 초대 코드가 없습니다."),

    //환율 관련 예외
    NOT_FOUND_EXCHANGE_RATE(HttpStatus.NOT_FOUND, "환율 정보가 존재하지 않습니다."),
    
    //나라 관련 예외
    NOT_FOUND_COUNTRY(HttpStatus.NOT_FOUND, "나라 정보가 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
