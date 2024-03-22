import React, { startTransition, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'

import styles from './Japan.module.css'

const Japan: React.FC = () => {
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
      navigate('/mainchild/stage/Japan')
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Stage를 클릭해서 퀴즈를 시작하세요!</h1>
      <div className={styles.backgroundIMG}></div>
      <div className={styles.japanmap}></div>
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
              안녕! 뭐? 타임머신을 타고 왔다고?
              <br />
              만나서 반갑지만...연료는 줄 수 없어.
              <br />
              하지만 내가 낸 문제를 맞힌다면 생각해볼게!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Japan
