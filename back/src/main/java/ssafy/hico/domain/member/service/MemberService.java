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
        // 문자를 위한 문자열
        String letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        // 숫자 3개 추가
        for (int i = 0; i < 3; i++) {
            int digit = random.nextInt(10);
            code.append(digit);
        }

        // 문자 3개 추가
        for (int i = 0; i < 3; i++) {
            int index = random.nextInt(letters.length());
            code.append(letters.charAt(index));
        }

        char[] characters = code.toString().toCharArray();
        for (int i = 0; i < characters.length; i++) {
            int randomIndex = random.nextInt(characters.length);
            char temp = characters[i];
            characters[i] = characters[randomIndex];
            characters[randomIndex] = temp;
        }
        return new String(characters);
    }
}
