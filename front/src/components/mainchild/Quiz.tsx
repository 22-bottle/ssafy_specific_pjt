import React, { startTransition, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styles from './Quiz.module.css'
import { Container } from "react-bootstrap";
import { quizList } from "@/state/childselectors";
import { useRecoilValue, useRecoilState } from "recoil";
import { countrydetailState } from "@/state/StageSubjectAtoms"
import { saveAnswer } from "@/api/child";
import { stageSubjectState } from '@/state/StageSubjectAtoms'

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
    interface quizResult {
        quizId: number,
        correct: boolean
    }
    const [saText, setSaText] = useState('');
    const [quizResultList, setQuizResultList] = useState(new Array<quizResult>());
    const goOxToNextQuiz = () => {
        if (answer === quizDataList[currentQuizIndex].quizAnswer) {
            quizResultList.push({ quizId: quizDataList[currentQuizIndex].quizId, correct: true });
            if (!quizDataList[currentQuizIndex].correct) {
                setPrice((prev) => prev += (quizDataList[currentQuizIndex].quizPrice + increase));
            }
        } else {
            quizResultList.push({ quizId: quizDataList[currentQuizIndex].quizId, correct: false });
        }
        setCurrentQuizIndex((prev) => (prev < 9 ? prev + 1 : prev));
    }
    const goSaToNextQuiz = () => {
        if (answer === quizDataList[currentQuizIndex].quizAnswer) {
            quizResultList.push({ quizId: quizDataList[currentQuizIndex].quizId, correct: true })
            if (!quizDataList[currentQuizIndex].correct) {
                setPrice((prev) => prev += (quizDataList[currentQuizIndex].quizPrice + increase));
            }
        } else {
            quizResultList.push({ quizId: quizDataList[currentQuizIndex].quizId, correct: false })
        }
        setSaText('');
        if (currentQuizIndex < 9) {
            setCurrentQuizIndex((prev) => (prev += 1));
        } else {
            saveAnswer(stageId, price, quizResultList)
                .then((response) => {
                    if (response.data.statusCode === 200) {
                        alert('제출되었습니다.');
                    } else {
                        alert('제출에 실패하였습니다.')
                    }
                })
                .catch((error) => {
                    console.error(error);
                    alert('오류');
                });
        }
    }

    // 객관식 선택지 자체를 버튼으로 >> 수정 필요!!!!!!!!!
    // const answerClick = () => {
    //     startTransition(() => {
    //         console.log(`선택된 선택지`)
    //     })
    // }

    const [answer, setAnswer] = useState('');
    const setOanswer = () => { setAnswer('O'); }
    const setXanswer = () => { setAnswer('X'); }
    const setSaAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSaText(event.target.value);
        setAnswer(event.target.value);
    };

    switch (quizDataList[currentQuizIndex].quizType) {
        case 'OX':
            return (
                <div>
                    <div className={styles.mainContainer}>
                        <img src={ characterImage } alt="캐릭터" className={styles.characterImage}/>
                        <div className={styles.questionBackground}>
                            <div className={styles.questionContainer}>
                                <p className={styles.point}>{ currentQuizIndex + 1 }/10</p>
                                <p className={styles.question}>{ quizDataList[currentQuizIndex].quizQuestion }</p>
                                <p className={styles.point}>{ quizDataList[currentQuizIndex].quizPrice }</p>
                                <p className={styles.point}>{ increase }</p>
                            </div>
                        </div>
                        <div className={styles.oxContainer}>
                            <div className={styles.trueContainer} onClick={setOanswer}>
                                <p className={styles.trueButton}>O</p>
                            </div>
                            <div className={styles.falseContainer} onClick={setXanswer}>
                                <p className={styles.falseButton}>X</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.backButton}></button>
                        <button className={styles.frontButton} onClick={goOxToNextQuiz}></button>                
                    </div>
                </div>
            )
        case 'SHORT_ANSWER':
            return (
                <div>
                    <div className={styles.mainContainer}>
                        <img src={ characterImage } alt="캐릭터" className={styles.characterImage}/>
                        <div className={styles.questionBackground}>
                            <div className={styles.questionContainer}>
                            <p className={styles.point}>{ currentQuizIndex + 1 }/10</p>
                                <p className={styles.question}>{ quizDataList[currentQuizIndex].quizQuestion }</p>
                                <p className={styles.point}>{ quizDataList[currentQuizIndex].quizPrice }</p>
                                <p className={styles.point}>{ increase }</p>
                            </div>
                        </div>
                        <div>
                            <input type="text" value={saText} onChange={setSaAnswer}/>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.backButton}></button>
                        <button className={styles.frontButton} onClick={goSaToNextQuiz}></button>                
                    </div>
                </div>
            )
        default:
            return null;
    };
};

export default Quiz;



        // 객관식
        // <div>
        //     <div className={styles.mainContainer}>
        //         <img src={ characterImage } alt="캐릭터" className={styles.characterImage}/>
        //         <div className={styles.questionBackground}>
        //             <div className={styles.questionContainer}>
        //                 {/* 여기가 문제 자리 */}
        //                 <p className={styles.question}>{ quizzes[currentQuizIndex].quizQuestion }</p>
        //                 <p className={styles.point}>{ quizzes[currentQuizIndex].quizPrice }</p>
        //                 <p className={styles.point}>{ increase }</p>
        //             </div>
        //         </div>
        //         <div className={styles.answerContainer}>
        //             <button onClick={() => answerClick()} className={styles.choiceButton}>
        //                 <span className={styles.choiceNumber}>1</span>
        //                 <span className={styles.choiceText}>{choices[0]}</span>
        //             </button>
        //             <button onClick={() => answerClick()} className={styles.choiceButton}>
        //                 <span className={styles.choiceNumber}>2</span>
        //                 <span className={styles.choiceText}>{choices[1]}</span>
        //             </button>
        //             <button onClick={() => answerClick()} className={styles.choiceButton}>
        //                 <span className={styles.choiceNumber}>3</span>
        //                 <span className={styles.choiceText}>{choices[2]}</span>
        //             </button>
        //             <button onClick={() => answerClick()} className={styles.choiceButton}>
        //                 <span className={styles.choiceNumber}>4</span>
        //                 <span className={styles.choiceText}>{choices[3]}</span>
        //             </button>
        //         </div>
        //     </div>
        //     <div className={styles.buttonContainer}>
        //         <button className={styles.backButton}></button>
        //         <button className={styles.frontButton} onClick={goToNextQuiz}></button>                
        //     </div>
        // </div>