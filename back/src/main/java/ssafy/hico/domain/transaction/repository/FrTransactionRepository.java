package ssafy.hico.domain.transaction.repository;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ssafy.hico.domain.transaction.dto.response.ChildFrTranResponse;
import ssafy.hico.domain.transaction.entity.FrTransaction;

import java.util.List;

@Repository
public interface FrTransactionRepository extends JpaRepository<FrTransaction, Long> {

    @EntityGraph(attributePaths = {"frWallet", "frWallet.member"})
    @Query("SELECT ft FROM FrTransaction ft JOIN ft.frWallet w JOIN w.member m WHERE m.id IN :childIds ORDER BY ft.createTime DESC")
    List<FrTransaction> findByChildMemberIds(@Param("childIds") List<Long> childIds);
}
