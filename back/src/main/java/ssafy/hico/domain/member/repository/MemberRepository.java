package ssafy.hico.domain.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ssafy.hico.domain.member.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    boolean findByEmail(String email);
}
