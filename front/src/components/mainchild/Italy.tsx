import React, { startTransition, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { stageSubjectState } from '@/state/StageSubjectAtoms'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'

import styles from './Italy.module.css'

const Italy: React.FC = () => {
  const [stageId, setStageId] = useRecoilState(stageSubjectState)

  // 물음표 아이콘 클릭
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const closeDescription = () => {
    setShowDescription(false)
  }

  const navigate = useNavigate()

  const stageStart = (Id: number) => {
    // 상태 업데이트 함수를 사용하여 stageId 상태를 변경
    setStageId(Id)
    // startTransition을 사용하여 비동기 업데이트 처리
    startTransition(() => {
      navigate('/mainchild/stage/Italy')
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Stage를 클릭해서 퀴즈를 시작하세요!</h1>
      <div className={styles.backgroundIMG}></div>
      <div className={styles.italymap}></div>
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

      <div className={styles.fairyContainer}>
        <div className={styles.fairy}>
          {!showDescription && (
            <FontAwesomeIcon
              icon={faQuestion}
              className={styles.questionIcon}
              onClick={toggleDescription}
            />
          )}
        </div>
        {showDescription && (
          <div className={styles.description}>
            <button className={styles.closeButton} onClick={closeDescription}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p>
              뭐? 연료를 달라고? 로마에선 로마법을 따라야지!
              <br />
              로마에 공짜는 없어! 문제를 맞춘다면 생각해볼게.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Italy
