package ssafy.hico.domain.member.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.member.dto.request.BankMemberSearchRequest;
import ssafy.hico.domain.member.dto.request.MemberSignUpRequest;
import ssafy.hico.domain.member.dto.response.BankMemberSearchResponse;
import ssafy.hico.domain.member.dto.response.MemberSignUpResponse;
import ssafy.hico.domain.member.entity.Gender;
import ssafy.hico.domain.member.entity.Member;
import ssafy.hico.domain.member.entity.Role;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.global.bank.BankApi;
import ssafy.hico.global.bank.BankApiClient;
import ssafy.hico.global.bank.BankProperties;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BankProperties bankProperties;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final BankApiClient bankApiClient;

    public void memberSignUp(MemberSignUpRequest request) {
        if(memberRepository.findByEmail(request.getEmail()).isPresent()){
            throw new CustomException(ErrorCode.DUPLICATE_EMAIL);
        }

        String memberSearchUrl = BankApi.MEMBER_SEARCH.getUrl();
        BankMemberSearchRequest requestBody = new BankMemberSearchRequest(request.getEmail(), bankProperties.getApiKey());
        String response = bankApiClient.getResponse(memberSearchUrl, requestBody);

        ObjectMapper objectMapper = new ObjectMapper();
        BankMemberSearchResponse memberSearchResponse = null;
        try {
            memberSearchResponse = objectMapper.readValue(response, BankMemberSearchResponse.class);

        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        String encryptPassword = bCryptPasswordEncoder.encode(request.getPassword());

        Member.MemberBuilder builder = Member.builder()
                .email(request.getEmail())
                .password(encryptPassword)
                .gender(request.getGender())
                .name(request.getName())
                .role(request.getRole())
                .birthDate(request.getBirthDate())
                .userKey(memberSearchResponse.getPayload().getUserKey());

        if(request.getRole() == Role.CHILD) {
            Member parent = memberRepository.findByInvitationCode(request.getCode())
                    .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_CODE));
            builder.parent(parent);
        } else if(request.getRole() == Role.PARENT) {
            builder.invitationCode(makeRandomCode());
        }

        memberRepository.save(builder.build());
    }


    public String makeRandomCode(){
        Random random = new Random();
        StringBuilder code = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            int digit = random.nextInt(10); // 0부터 9까지의 숫자 생성
            code.append(digit); // 생성된 숫자를 문자열에 추가
        }
        return code.toString();
    }
}
