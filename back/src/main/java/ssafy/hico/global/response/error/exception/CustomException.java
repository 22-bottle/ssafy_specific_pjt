package ssafy.hico.global.response.error.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import ssafy.hico.global.response.error.ErrorCode;

@AllArgsConstructor
@Getter
public class CustomException extends RuntimeException{
    ErrorCode errorCode;
}