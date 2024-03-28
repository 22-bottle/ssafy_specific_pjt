import React, { startTransition, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styles from './Quiz.module.css'
import { Container } from "react-bootstrap";
import { quizList } from "@/state/childselectors";
import { useRecoilValue, useRecoilState } from "recoil";
import { countrydetailState } from "@/state/StageSubjectAtoms"


const Quiz:React.FC = () => {
    const [countryId, setCountryId] = useRecoilState(countrydetailState);
    const characterImages = [require('@/assets/fairy_usa.png'), 
                             require('@/assets/fairy_japan.png'), 
                             require('@/assets/fairy_italy.png'),
                             require('@/assets/fairy_china.png')];
    const characterImage = characterImages[countryId - 1];
    const { increase, quizzes } = useRecoilValue(quizList) || [];
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const goToNextQuiz = () => {
        setCurrentQuizIndex((prev) => (prev < 9 ? prev + 1 : prev));
    }

    // 객관식 선택지 자체를 버튼으로 >> 수정 필요!!!!!!!!!
    const answerClick = () => {
        startTransition(() => {
            console.log(`선택된 선택지`)
        })
    }

    switch (quizzes[currentQuizIndex].quizType) {
        case 'OX':
            return (
                <div>
                    <div className={styles.mainContainer}>
                        <img src={ characterImage } alt="캐릭터" className={styles.characterImage}/>
                        <div className={styles.questionBackground}>
                            <div className={styles.questionContainer}>
                                <p className={styles.point}>{ currentQuizIndex + 1 }/10</p>
                                <p className={styles.question}>{ quizzes[currentQuizIndex].quizQuestion }</p>
                                <p className={styles.point}>{ quizzes[currentQuizIndex].quizPrice }</p>
                                <p className={styles.point}>{ increase }</p>
                            </div>
                        </div>
                        <div className={styles.oxContainer}>
                            <div className={styles.trueContainer}>
                                <p className={styles.trueButton}>O</p>
                            </div>
                            <div className={styles.falseContainer}>
                                <p className={styles.falseButton}>X</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.backButton}></button>
                        <button className={styles.frontButton} onClick={goToNextQuiz}></button>                
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
                                <p className={styles.question}>{ quizzes[currentQuizIndex].quizQuestion }</p>
                                <p className={styles.point}>{ quizzes[currentQuizIndex].quizPrice }</p>
                                <p className={styles.point}>{ increase }</p>
                            </div>
                        </div>
                        <div>
                            <input type="text" />
                            <button>제출</button>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.backButton}></button>
                        <button className={styles.frontButton} onClick={goToNextQuiz}></button>                
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