package ssafy.hico.domain.transaction.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ssafy.hico.domain.transaction.dto.response.PageParentFrTranResponse;
import ssafy.hico.domain.transaction.entity.FrTransaction;

import java.util.List;

@Repository
public interface FrTransactionRepository extends JpaRepository<FrTransaction, Long> {

    @Query("SELECT new ssafy.hico.domain.transaction.dto.response.PageParentFrTranResponse(ft.id, ft.balance, ft.createTime, ft.isTransacted, m.id, m.name) " +
            "FROM FrTransaction ft JOIN ft.frWallet w JOIN w.member m WHERE m.id IN :childId ORDER BY ft.createTime DESC")
    Page<PageParentFrTranResponse> findByChildMemberIds(@Param("childId") List<Long> childId, Pageable pageable);
}
