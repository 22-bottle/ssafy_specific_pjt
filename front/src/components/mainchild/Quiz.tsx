import React, { startTransition, useState, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import styles from './Quiz.module.css'
import { Container } from 'react-bootstrap'
import { quizList } from '@/state/childselectors'
import { useRecoilValue, useRecoilState } from 'recoil'
import { countrydetailState } from '@/state/StageSubjectAtoms'
import { saveAnswer } from '@/api/child'
import { stageSubjectState } from '@/state/StageSubjectAtoms'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import QuizResult from './Result'
import previous from '../../assets/preview.png'
import next from '../../assets/next.png'
import { Drawer, IconButton } from '@mui/material'
import NavbarDrawer from './navbar'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'

const Quiz: React.FC = () => {
  const [countryId, setCountryId] = useRecoilState(countrydetailState)
  const [stageId, setStageId] = useRecoilState(stageSubjectState)
  const characterImages = [
    require('@/assets/fairy_usa.png'),
    require('@/assets/fairy_japan.png'),
    require('@/assets/fairy_italy.png'),
    require('@/assets/fairy_china.png'),
  ]
  const characterImage = characterImages[countryId - 1]
  const { increase, quizDataList } = useRecoilValue(quizList) || []
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [price, setPrice] = useState(0)
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (currentQuizIndex >= 10) {
      saveAnswer(stageId, price, quizResultList)
        .then((response) => {
          if (response.data.statusCode === 200) {
            setOpen(true)
          } else {
            alert('제출에 실패하였습니다.')
          }
        })
        .catch((error) => {
          console.error(error)
          alert('오류')
        })
    }
  }, [currentQuizIndex])
  interface quizResult {
    quizId: number
    correct: boolean
  }
  const [saText, setSaText] = useState('')
  const [quizResultList, setQuizResultList] = useState(new Array<quizResult>())
  const goOxToNextQuiz = () => {
    if (answer === quizDataList[currentQuizIndex].quizAnswer) {
      quizResultList.push({
        quizId: quizDataList[currentQuizIndex].quizId,
        correct: true,
      })
      setCount((prev) => (prev += 1))
      if (!quizDataList[currentQuizIndex].correct) {
        setPrice(
          (price) =>
            (price += quizDataList[currentQuizIndex].quizPrice + increase)
        )
      }
    } else {
      quizResultList.push({
        quizId: quizDataList[currentQuizIndex].quizId,
        correct: false,
      })
    }
    setCurrentQuizIndex((prev) => (prev += 1))
    setSelected('')
  }
  const goSaToNextQuiz = () => {
    if (answer === quizDataList[currentQuizIndex].quizAnswer) {
      quizResultList.push({
        quizId: quizDataList[currentQuizIndex].quizId,
        correct: true,
      })
      setCount((prev) => (prev += 1))
      if (!quizDataList[currentQuizIndex].correct) {
        setPrice(
          (prev) =>
            (prev += quizDataList[currentQuizIndex].quizPrice + increase)
        )
      }
    } else {
      quizResultList.push({
        quizId: quizDataList[currentQuizIndex].quizId,
        correct: false,
      })
    }
    setSaText('')
    setCurrentQuizIndex((prev) => (prev += 1))
    setSelected('')
  }

  // 객관식 선택지 자체를 버튼으로 >> 수정 필요!!!!!!!!!
  // const answerClick = () => {
  //     startTransition(() => {
  //         console.log(`선택된 선택지`)
  //     })
  // }

  const [answer, setAnswer] = useState('')
  const [selected, setSelected] = useState('')
  const setOanswer = () => {
    setAnswer('O')
    setSelected('true')
  }
  const setXanswer = () => {
    setAnswer('X')
    setSelected('false')
  }
  const setSaAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaText(event.target.value)
    setAnswer(event.target.value)
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // navbar open
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true)
  }

  // navbar close
  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  switch (quizDataList[currentQuizIndex].quizType) {
    case 'OX':
      return (
        <div className={styles.main}>
          {/* navbar 버튼 */}
          <IconButton
            onClick={handleDrawerOpen}
            sx={{
              position: 'fixed', // 요소를 뷰포트에 대해 고정
              top: 0, // 상단에서 20px 떨어진 위치
              right: 165, // 오른쪽에서 20px 떨어진 위치
              backgroundColor: 'rgba(255, 164, 58, 0.95)',
              borderRadius: '0 0 40px 40px', // 아래쪽 모서리에만 border-radius 적용
              '&:hover': {
                backgroundColor: '#FF8D09', // 호버 배경색
              },
              zIndex: 1200, // 다른 요소들 위에 오도록 z-index 설정
            }}
          >
            <KeyboardDoubleArrowDownRoundedIcon
              sx={{ fontSize: '50px', color: 'white' }}
            />
          </IconButton>
          <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerClose}>
            <NavbarDrawer onClose={handleDrawerClose} />
          </Drawer>
          <div className={styles.mainContainer}>
            <img
              src={characterImage}
              alt="캐릭터"
              className={styles.characterImage}
            />
            <div className={styles.questionBackground}>
              <div className={styles.questionContainer}>
                <p className={styles.point}>{currentQuizIndex + 1}/10</p>
                <p className={styles.question}>
                  {quizDataList[currentQuizIndex].quizQuestion}
                </p>
                <p className={styles.point}>
                  {quizDataList[currentQuizIndex].quizPrice}
                </p>
                <p className={styles.point}>{increase}</p>
              </div>
            </div>
            <div className={styles.oxContainer}>
              <div
                className={`${styles.trueContainer} ${selected === 'true' ? styles.selected : ''}`}
                onClick={setOanswer}
              >
                <p className={styles.trueButton}>O</p>
              </div>
              <div
                className={`${styles.falseContainer} ${selected === 'false' ? styles.selected : ''}`}
                onClick={setXanswer}
              >
                <p className={styles.falseButton}>X</p>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.backButton}
              onClick={() => alert('이전 문제로 돌아갈 수 없어요!')}
            >
              <img style={{ width: '150px' }} src={previous} alt="previous" />
            </button>
            <button className={styles.frontButton} onClick={goOxToNextQuiz}>
              <img style={{ width: '150px' }} src={next} alt="next" />
            </button>
          </div>
        </div>
      )
    case 'SHORT_ANSWER':
      return (
        <div>
          {/* navbar 버튼 */}
          <IconButton
            onClick={handleDrawerOpen}
            sx={{
              position: 'fixed', // 요소를 뷰포트에 대해 고정
              top: 0, // 상단에서 20px 떨어진 위치
              right: 165, // 오른쪽에서 20px 떨어진 위치
              backgroundColor: 'rgba(255, 164, 58, 0.95)',
              borderRadius: '0 0 40px 40px', // 아래쪽 모서리에만 border-radius 적용
              '&:hover': {
                backgroundColor: '#FF8D09', // 호버 배경색
              },
              zIndex: 1200, // 다른 요소들 위에 오도록 z-index 설정
            }}
          >
            <KeyboardDoubleArrowDownRoundedIcon
              sx={{ fontSize: '50px', color: 'white' }}
            />
          </IconButton>
          <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerClose}>
            <NavbarDrawer onClose={handleDrawerClose} />
          </Drawer>
          <div className={styles.mainContainer}>
            <img
              src={characterImage}
              alt="캐릭터"
              className={styles.characterImage}
            />
            <div className={styles.questionBackground}>
              <div className={styles.questionContainer}>
                <p className={styles.point}>{currentQuizIndex + 1}/10</p>
                <p className={styles.question}>
                  {quizDataList[currentQuizIndex].quizQuestion}
                </p>
                <p className={styles.point}>
                  {quizDataList[currentQuizIndex].quizPrice}
                </p>
                <p className={styles.point}>{increase}</p>
              </div>
            </div>
            <div className={styles.textfield}>
              <input
                type="text"
                value={saText}
                onChange={setSaAnswer}
                className={styles.inputfield}
                placeholder="정답을 입력 해주세요"
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.backButton}
              onClick={() => alert('이전 문제로 돌아갈 수 없어요!')}
            >
              <img style={{ width: '150px' }} src={previous} alt="previous" />
            </button>
            <button className={styles.frontButton} onClick={goOxToNextQuiz}>
              <img style={{ width: '150px' }} src={next} alt="next" />
            </button>
          </div>
        </div>
      )
    default:
      return (
        <div>
          <div className={styles.modal}>
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '80%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* 모달 닫기 버튼 */}
                <QuizResult
                  open={open}
                  setOpen={setOpen}
                  count={count}
                  price={price}
                />{' '}
                {/* open 상태와 모달 닫는 함수 전달 */}
              </Box>
            </Modal>
          </div>
        </div>
      )
  }
}

export default Quiz
