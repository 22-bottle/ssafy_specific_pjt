import React from "react";
import styles from '@/components/mainchild/Result.module.css'
const  quizsuccess = require('@/assets/success.png');
// const quizfailed = require('@/assets/falied.png');

const Result:React.FC= () => {
    
    return (
        <div className={styles.componentContainer}>
      <div className={styles.header}>
        스테이지 3
        <button className={styles.closeButton}>X</button>
      </div>
      <div className={styles.title}>10개 중 9개 정답</div>
      {/* if문으로  성공 실패 렌더링 다르게*/}
      <img src={quizsuccess} alt="Character" className={styles.characterImage} />
      <div className={styles.info}>
        <div>성공</div>
        <div>연료 5% 충전</div>
        <div>코인 + 7.5 달러</div>
      </div>
      <button className={styles.button}>다음 스테이지</button>
    </div>
    );
};

export default Result;