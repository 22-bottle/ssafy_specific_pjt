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
    ONLY_ACCESS_PARENT(HttpStatus.BAD_REQUEST, "부모님만 접근할 수 있는 페이지입니다."),
    ONLY_ACCESS_CHILD(HttpStatus.BAD_REQUEST, "아이만 접근할 수 있는 페이지입니다."),
    NON_MEMBER_ACCESS(HttpStatus.UNAUTHORIZED, "로그인 후 이용 가능합니다."),

    //JWT 관련 예외
    EXPIRED_AUTH_TOKEN(HttpStatus.UNAUTHORIZED, "토큰이 만료되었습니다."),
    NOT_FOUND_AUTH_TOKEN(HttpStatus.BAD_REQUEST, "토큰 정보가 없습니다."),
    INVALID_AUTH_TOKEN(HttpStatus.UNAUTHORIZED, "권한 정보가 없는 토큰입니다.");


    private final HttpStatus httpStatus;
    private final String message;
}
