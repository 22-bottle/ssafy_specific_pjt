import React, { startTransition, useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { stageSubjectState } from '@/state/StageSubjectAtoms'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'
import { country } from '@/api/child'
import styles from './China.module.css'

const China: React.FC = () => {
  const [stageId, setStageId] = useRecoilState(stageSubjectState)
  const [stageOneAns, setStageOneAns] = useState('');
  const [stageTwoAns, setStageTwoAns] = useState('');
  const [stageThreeAns, setStageThreeAns] = useState('');
  const [stageFourAns, setStageFourAns] = useState('');
  const [stageFiveAns, setStageFiveAns] = useState('');
  // 물음표 아이콘 클릭
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const closeDescription = () => {
    setShowDescription(false)
  }

  const navigate = useNavigate()
  useEffect(() => {
    const fetchChinaStage = async () => {
      try {
        const response = await country(4)
        setStageOneAns(response.data.data[0].answer);
        setStageTwoAns(response.data.data[1].answer);
        setStageThreeAns(response.data.data[2].answer);
        setStageFourAns(response.data.data[3].answer);
        setStageFiveAns(response.data.data[4].answer);
      } catch (error) {
        console.error('API 요청 중 오류 발생: ', error)
      }
    }
    fetchChinaStage();
  }, [])
  const stageStart = (Id: number) => {
    // 상태 업데이트 함수를 사용하여 stageId 상태를 변경
    setStageId(Id)
    // startTransition을 사용하여 비동기 업데이트 처리
    startTransition(() => {
      navigate('/mainchild/stage/china')
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Stage를 클릭해서 퀴즈를 시작하세요!</h1>
      <div className={styles.backgroundIMG}></div>
      <div className={styles.chinamap}></div>
      <div onClick={()=>stageStart(1)} className={styles.stage1}>{stageOneAns}/10</div>
      {/* stage가 개방되었는지 확인하고 css 다르게 적용 기능 추가해야함 */}
      <div onClick={()=>stageStart(2)} className={styles.unactive_stage3}>{stageTwoAns}/10</div>
      <div onClick={()=>stageStart(3)} className={styles.unactive_stage4}>{stageThreeAns}/10</div>
      <div onClick={()=>stageStart(4)} className={styles.unactive_stage5}>{stageFourAns}/10</div>
      <div onClick={()=>stageStart(5)} className={styles.unactive_stage2}>{stageFiveAns}/10</div>

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
