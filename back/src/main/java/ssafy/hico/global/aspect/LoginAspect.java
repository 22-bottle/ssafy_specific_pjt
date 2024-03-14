package ssafy.hico.global.aspect;

import jakarta.servlet.http.HttpServletRequest;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import ssafy.hico.domain.member.entity.Role;
import ssafy.hico.global.annotation.LoginOnly;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;

import javax.naming.AuthenticationException;
import java.io.IOException;

@Aspect
@Component
public class LoginAspect {
    @Before("@annotation(loginOnly)")
    public void LoginOnly(LoginOnly loginOnly) throws IOException, AuthenticationException {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();

        Role role = (Role)request.getAttribute("role");

        switch(loginOnly.level()){
            case PARENT:
                if(role != Role.PARENT) throw new CustomException(ErrorCode.ONLY_ACCESS_PARENT);
                break;
            case CHILD:
                if(role != Role.CHILD) throw new CustomException(ErrorCode.ONLY_ACCESS_CHILD);
                break;
            case ALL:
                if(role != Role.PARENT && role != Role.CHILD) throw new CustomException(ErrorCode.NON_MEMBER_ACCESS);
                break;
        }
    }
}
