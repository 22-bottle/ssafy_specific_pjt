import React, { startTransition, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'

import styles from './China.module.css'

const China: React.FC = () => {
  // 물음표 아이콘 클릭
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const closeDescription = () => {
    setShowDescription(false)
  }

  const navigate = useNavigate()

  const stageStart = () => {
    // startTransition을 사용하여 비동기 업데이트 처리
    startTransition(() => {
      navigate('/mainchild/stage/China')
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Stage를 클릭해서 퀴즈를 시작하세요!</h1>
      <div className={styles.backgroundIMG}></div>
      <div className={styles.chinamap}></div>
      <div onClick={stageStart} className={styles.stage1}></div>
      {/* stage가 개방되었는지 확인하고 css 다르게 적용 기능 추가해야함 */}
      <div onClick={stageStart} className={styles.unactive_stage2}></div>
      <div onClick={stageStart} className={styles.unactive_stage3}></div>
      <div onClick={stageStart} className={styles.unactive_stage4}></div>
      <div onClick={stageStart} className={styles.unactive_stage5}></div>

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
              중국에 온 걸 환영해!
              <br />
              연료가 필요하다고? 내가 도와줄게!
              <br />
              간단해. 내가 낸 문제를 맞히면 돼! 어때 쉽지?
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default China
