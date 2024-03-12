package ssafy.hico.global.error.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import ssafy.hico.global.error.ErrorCode;

@AllArgsConstructor
@Getter
public class CustomException extends RuntimeException{
    ErrorCode errorCode;
}