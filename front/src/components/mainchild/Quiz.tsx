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
import goToprevious from '../../assets/goToprevious.png'
import goTonext from '../../assets/goTonext.png'

const Quiz:React.FC = () => {
    const [countryId, setCountryId] = useRecoilState(countrydetailState);
    const [stageId, setStageId] = useRecoilState(stageSubjectState);
    const characterImages = [require('@/assets/fairy_usa.png'), 
                             require('@/assets/fairy_japan.png'), 
                             require('@/assets/fairy_italy.png'),
                             require('@/assets/fairy_china.png')];
    const characterImage = characterImages[countryId - 1];
    const { increase, quizDataList } = useRecoilValue(quizList) || [];
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [price, setPrice] = useState(0);
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [saText, setSaText] = useState('');
    const [quizResultList, setQuizResultList] = useState(new Array<quizResult>());
    const [answer, setAnswer] = useState('');
    const [selected, setSelected] = useState('');
    useEffect(() => {
        if (currentQuizIndex >= 10) {
            saveAnswer(stageId, price, count, quizResultList)
                    .then((response) => {
                        if (response.data.statusCode === 200) {
                            setOpen(true);
                        } else {
                            alert('제출에 실패하였습니다.')
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        alert('오류');
                    });
        }
    }, [currentQuizIndex]);
    interface quizResult {
        quizId: number,
        correct: boolean
    }
    const setOanswer = () => {
        setAnswer('O')
        setSelected('true')
    }
    const setXanswer = () => {
        setAnswer('X')
        setSelected('false')
    }
    const setSaAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSaText(event.target.value);
        setAnswer(event.target.value);
    };
    const goToNextQuiz = () => {
        if (answer === quizDataList[currentQuizIndex].quizAnswer) {
            quizResultList.push({ quizId: quizDataList[currentQuizIndex].quizId, correct: true });
            setCount(prev => prev += 1);
            if (!quizDataList[currentQuizIndex].correct) {
                setPrice(price => price += (quizDataList[currentQuizIndex].quizPrice + increase));
            }
        } else {
            quizResultList.push({ quizId: quizDataList[currentQuizIndex].quizId, correct: false });
        }
        setAnswer('');
        setSaText('');
        setSelected('');
        setCurrentQuizIndex((prev) => (prev += 1));
    }

  switch (quizDataList[currentQuizIndex].quizType) {
    case 'OX':
      return (
        <div>
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
              <img
                style={{ width: '150px' }}
                src={goToprevious}
                alt="previous"
              />
            </button>
            <button className={styles.frontButton} onClick={goToNextQuiz}>
              <img style={{ width: '150px' }} src={goTonext} alt="next" />
            </button>
          </div>
        </div>
      )
    case 'SHORT_ANSWER':
      return (
        <div>
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
              <img
                style={{ width: '150px' }}
                src={goToprevious}
                alt="previous"
              />
            </button>
            <button className={styles.frontButton} onClick={goToNextQuiz}>
              <img style={{ width: '150px' }} src={goTonext} alt="next" />
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

export default Quiz;
