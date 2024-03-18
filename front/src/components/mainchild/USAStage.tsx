import React, { useState, FormEvent } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styles from './USAStage.module.css'


const USAStage:React.FC= () => {
    // 해당 스테이지의 만화 주제
    const [topic, setTopic] = useState<string>('미국의 독립전쟁');
    // 해당 스테이지의 번호 >> int로??
    const [stageNum, setStageNum] = useState<string>('1');

    // 퀴즈 시작하기 버튼 >> 경로 이동 필요!!
    const navigate = useNavigate();

    const startClick = () => {
        navigate('/mainchild/stage/cartoon');
    };
    
    return (
        // 화면 정 가운데 div
        <div className={styles.mainContainer}>            
            <h1 className={styles.title}>Stage {stageNum}</h1>
            <div>
                <h1 className={styles.topic}>{topic}에 대해 알아볼까요?</h1>
            </div>
            <div>
                {/* 캐릭터 자리 */}
                <img src="" alt="미국 캐릭터" className={styles.characterImage} />
            </div>
            <button onClick={ startClick } className={styles.startButton}>시작하기</button>            
        </div>
    );
};

export default USAStage;