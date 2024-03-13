package ssafy.hico.test;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ssafy.hico.domain.member.entity.Child;
import ssafy.hico.domain.member.entity.Member;
import ssafy.hico.domain.member.repository.MemberRepository;
import ssafy.hico.domain.member.service.MemberService;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class MemberServiceTest {

    private final MemberService memberService;
    private final MemberRepository memberRepository;

    @Autowired
    public MemberServiceTest(MemberService memberService, MemberRepository memberRepository) {
        this.memberService = memberService;
        this.memberRepository = memberRepository;
    }

    @Test
    @Transactional
    public void 테스트() {
        Child child = Child.builder().email("ssafy@naver.com").build();

        Member savedMember = memberRepository.save(child);

        Member foundMember = memberRepository.findById(savedMember.getId()).orElseThrow();

        assertThat(foundMember.getEmail()).isEqualTo(child.getEmail());
    }

}
