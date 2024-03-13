package ssafy.hico.global.response.error.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.hico.global.response.error.ErrorCode;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CustomException extends RuntimeException{
    ErrorCode errorCode;
    String code;
    String message;

    public CustomException(ErrorCode errorCode){
        this.errorCode = errorCode;
    }

    public CustomException(String code, String message){
        this.code = code;
        this.message = message;
    }
}