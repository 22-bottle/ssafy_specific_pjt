package ssafy.hico.domain.member.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import ssafy.hico.domain.member.dto.request.MemberSignUpRequest;
import ssafy.hico.domain.member.dto.response.BankMemberSearchResponse;
import ssafy.hico.domain.member.dto.response.MemberSignUpResponse;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.global.bank.BankApi;
import ssafy.hico.global.bank.BankProperties;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BankProperties bankProperties;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public MemberSignUpResponse memberSignUp(MemberSignUpRequest request) {
        if(memberRepository.findByEmail(request.getEmail())){
            throw new CustomException(ErrorCode.DUPLICATE_EMAIL);
        }

        String memberSearchUrl = BankApi.MEMBER_SEARCH.getUrl();
        WebClient webClient = WebClient.create(memberSearchUrl);
        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
        parameters.add("userId", request.getEmail());
        parameters.add("apiKey", bankProperties.getApiKey());

        String response = webClient.post()
                .uri(memberSearchUrl)
                .bodyValue(parameters)
                .retrieve()
                .bodyToMono(String.class).block();

        ObjectMapper objectMapper = new ObjectMapper();
        BankMemberSearchResponse memberSearchResponse = null;
        try {
            memberSearchResponse
                    = objectMapper.readValue(response, BankMemberSearchResponse.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        
        String encryptPassword = bCryptPasswordEncoder.encode(request.getPassword());


        return MemberSignUpResponse.builder().name(request.getName()).build();
    }
}
