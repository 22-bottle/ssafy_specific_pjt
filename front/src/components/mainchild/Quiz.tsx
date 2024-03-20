import React, { startTransition, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styles from './Quiz.module.css'
import { Container } from "react-bootstrap";


const Quiz:React.FC<{ type: string }> = ({ type }) => {

    const [question, setQuestion] = useState('여기가 문제 자리');
    const [point, setPoint] = useState('0.5$')
    const characterImage = require('@/assets/fairy_usa.png')

    // 선택지 배열
    const choices = ['1번이 정답일까?', '아니면 2번?', '3번도 맞는 거 같은데?', '아니야 4번인 거 같아!'];

    // 객관식 선택지 자체를 버튼으로 >> 수정 필요!!!!!!!!!
    const answerClick = () => {
        startTransition(() => {
            console.log(`선택된 선택지`)
        })
    }

    return (

        // 주관식

        <div>
            <div className={styles.mainContainer}>
                <img src={ characterImage } alt="캐릭터" className={styles.characterImage}/>
                <div className={styles.questionBackground}>
                    <div className={styles.questionContainer}>
                        {/* 여기가 문제 자리 */}
                        <p className={styles.question}>{ question }</p>
                        <p className={styles.point}>{ point }</p>
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <button onClick={() => answerClick()} className={styles.choiceButton}>
                        <span className={styles.choiceNumber}>1</span>
                        <span className={styles.choiceText}>{choices[0]}</span>
                    </button>
                    <button onClick={() => answerClick()} className={styles.choiceButton}>
                        <span className={styles.choiceNumber}>2</span>
                        <span className={styles.choiceText}>{choices[1]}</span>
                    </button>
                    <button onClick={() => answerClick()} className={styles.choiceButton}>
                        <span className={styles.choiceNumber}>3</span>
                        <span className={styles.choiceText}>{choices[2]}</span>
                    </button>
                    <button onClick={() => answerClick()} className={styles.choiceButton}>
                        <span className={styles.choiceNumber}>4</span>
                        <span className={styles.choiceText}>{choices[3]}</span>
                    </button>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.backButton}></button>
                <button className={styles.frontButton}></button>                
            </div>
        </div>

        );

        


        // 객관식
        // <div>
        //     <div className={styles.mainContainer}>
        //         <img src={ characterImage } alt="캐릭터" className={styles.characterImage}/>
        //         <div className={styles.questionBackground}>
        //             <div className={styles.questionContainer}>
        //                 {/* 여기가 문제 자리 */}
        //                 <p className={styles.question}>{ question }</p>
        //                 <p className={styles.point}>{ point }</p>
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
        //         <button className={styles.frontButton}></button>                
        //     </div>
        // </div>

        // );




        // OX 퀴즈
        // <div>
        //     <div className={styles.mainContainer}>
        //         <img src={ characterImage } alt="캐릭터" className={styles.characterImage}/>
        //         <div className={styles.questionBackground}>
        //             <div className={styles.questionContainer}>
        //                 <p className={styles.question}>{ question }</p>
        //                 <p className={styles.point}>{ point }</p>
        //             </div>
        //         </div>
        //         <div className={styles.oxContainer}>
        //             <div className={styles.trueContainer}>
        //                 <p className={styles.trueButton}>O</p>
        //             </div>
        //             <div className={styles.falseContainer}>
        //                 <p className={styles.falseButton}>X</p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className={styles.buttonContainer}>
        //         <button className={styles.backButton}></button>
        //         <button className={styles.frontButton}></button>                
        //     </div>
        // </div>

        // );


        
    
    // type에 따라 다른 UI 렌더링
    // switch (type) {
    //     // OX 퀴즈
    //     case 'ox':
    //         return (
    //             <div className={styles.mainContainer}>
    //                 <div className={styles.questionContainer}>

    //                 </div>
    //                 <div className={styles.buttonContainer}>
    //                     <button className={styles.backButton}></button>
    //                     <button className={styles.frontButton}></button>
    //                 </div>
    //             </div>
    //         );
        
    //     // 객관식 퀴즈
    //     case 'multiple-choice':
    //         return (
    //             <div>
    //             {/* 객관식 퀴즈의 내용 및 UI */}
    //             <p>객관식 퀴즈입니다.</p>
    //             </div>
    //         );

    //     // 주관식 퀴즈
    //     case 'open-ended':
    //         return (
    //             <div>
    //             {/* 주관식 퀴즈의 내용 및 UI */}
    //             <p>주관식 퀴즈입니다.</p>
    //             </div>
    //         );
    //     default:    
    //         return null;
    // }

    };

export default Quiz;