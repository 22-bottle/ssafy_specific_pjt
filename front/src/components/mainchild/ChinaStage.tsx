import React, { useState, startTransition } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate, Outlet } from "react-router-dom";
import { selectedChinaStageInfo } from "@/state/StageSubjectSelectors";
import styles from './ChinaStage.module.css'


const ChinaStage:React.FC= () => {
    // 해당 스테이지의 만화 주제
    // const [topic, setTopic] = useState<string>('중국의 역사적 사건');
    // 해당 스테이지의 번호 >> int로??
    // const [stageNum, setStageNum] = useState<string>('1');

    const { stageNum, topic } = useRecoilValue(selectedChinaStageInfo);

    const characterImage = require('@/assets/fairy_china.png')

    // 퀴즈 시작하기 버튼 >> 경로 이동 필요!!
    const navigate = useNavigate();

    const startClick = () => {
        startTransition(() => {
            navigate('/mainchild/stage/cartoon');
        });
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
                <img src={ characterImage } alt="중국 캐릭터" className={styles.characterImage} />
            </div>
            <button onClick={ startClick } className={styles.startButton}>시작하기</button>            
        </div>
    );
};

export default ChinaStage;