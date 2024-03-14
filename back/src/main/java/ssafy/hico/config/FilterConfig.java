package ssafy.hico.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ssafy.hico.global.filter.JwtAuthenticationFilter;
import ssafy.hico.global.jwt.JwtTokenProvider;

@Configuration
public class FilterConfig {

//    @Bean
//    public FilterRegistrationBean<JwtAuthenticationFilter> jwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
//        FilterRegistrationBean<JwtAuthenticationFilter> registrationBean = new FilterRegistrationBean<>();
//        registrationBean.setFilter(new JwtAuthenticationFilter(jwtTokenProvider));
//        registrationBean.addUrlPatterns("/*"); // 모든 URL에 필터를 적용
//        return registrationBean;
//    }
}
