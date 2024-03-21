import React, { useState, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { stageSubjectState } from "@/state/StageSubjectAtoms";

import styles from "./USA.module.css";

const USA: React.FC = () => {
  const [stageId, setStageId] = useRecoilState(stageSubjectState);

  const navigate = useNavigate();

  const stageStart = (Id: number) => {
    // 상태 업데이트 함수를 사용하여 stageId 상태를 변경
    setStageId(Id);
    // startTransition을 사용하여 비동기 업데이트 처리
    startTransition(() => {
      navigate("/mainchild/stage/usa");
    });
  };

  return (
    <div>
      <div className={styles.backgroundIMG}></div>
      <div className={styles.usamap}></div>
      <div onClick={() => stageStart(0)} className={styles.stage1}></div>
      {/* stage가 개방되었는지 확인하고 css 다르게 적용 기능 추가해야함 */}
      <div
        onClick={() => stageStart(1)}
        className={styles.unactive_stage2}
      ></div>
      <div
        onClick={() => stageStart(2)}
        className={styles.unactive_stage3}
      ></div>
      <div
        onClick={() => stageStart(3)}
        className={styles.unactive_stage4}
      ></div>
      <div
        onClick={() => stageStart(4)}
        className={styles.unactive_stage5}
      ></div>

      <div className={styles.fairy}></div>
    </div>
  );
};

export default USA;
