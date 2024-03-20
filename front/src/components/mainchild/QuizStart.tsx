import React, { useState, startTransition } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styles from './QuizStart.module.css'


const QuizStart:React.FC= () => {
  // 해당 스테이지의 번호 >> int로??
  const [stageNum, setStageNum] = useState<string>('1');

  const characterImage = require('@/assets/fairy_usa.png')



  // 퀴즈 시작하기 버튼
  const navigate = useNavigate();

  const startClick = () => {
    // startTransition을 사용하여 비동기 업데이트 처리
    startTransition(() => {
      navigate('/mainchild/stage/quiz');
    });
  };


  return (
    // 화면 정 가운데 div
    <div className={styles.mainContainer}>            
        <h1 className={styles.title}>Stage {stageNum}</h1>
        <div>
            <h1 className={styles.topic}>이제 문제를 풀어볼까요?</h1>
        </div>
        <div>
            {/* 캐릭터 자리 */}
            <img src={ characterImage } alt="캐릭터" className={styles.characterImage}/>
        </div>
        <button onClick={ startClick } className={styles.startButton}>퀴즈 풀기</button>            
    </div>
  );
};

export default QuizStart;