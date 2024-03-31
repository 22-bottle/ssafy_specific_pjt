import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Cartoon.module.css'
import { bookList } from "@/state/childselectors";
import { useRecoilValue } from "recoil";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import play from '../../assets/play.png'
import stop from '../../assets/stop.png'

const Cartoon: React.FC = () => {
    const navigate = useNavigate()
    const cartoonList = useRecoilValue(bookList) || [];

    const [currentCartoonIndex, setCurrentCartoonIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // TTS 재생 상태를 추적하는 상태
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    const [animation, setAnimation] = useState('');

    useEffect(() => {
        setAnimation('fadeIn');
    }, [currentCartoonIndex]);

    useEffect(() => {
        const setVoicesList = () => {
            const allVoices = speechSynthesis.getVoices();
            const koVoices = allVoices.filter(voice => voice.lang.startsWith('ko'));
            setVoices(koVoices);
        };

        setVoicesList();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = setVoicesList;
        }
    }, []);

    // TTS 재생 함수
    const playTTS = () => {
        if (isPlaying) {
            speechSynthesis.cancel(); // 이미 재생 중인 TTS가 있다면 중지
            setIsPlaying(false);
        } else {
            // 텍스트를 부분적으로 나누어 처리
            const textParts = splitText(cartoonList[currentCartoonIndex].tts);

            // 첫 번째 텍스트 부분으로 시작
            speakTextPart(0, textParts);
            console.log(textParts);
        }
    };

    const splitText = (text: string): string[] => {
        const parts: string[] = text.split('.').filter(part => part.trim().length > 0).map(part => part.trim() + '.');
        return parts;
    };

    const speakTextPart = (index: number, textParts: string[]): void => {
        if (index >= textParts.length) {
            setIsPlaying(false); // 모든 텍스트 부분이 말해진 후
            return;
        }

        const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(textParts[index]);
        if (voices.length > 1) {
            utterance.voice = voices[1]; // 두 번째 한국어 목소리 선택
        }
        utterance.onend = () => {
            speakTextPart(index + 1, textParts); // 다음 텍스트 부분으로 이동
        };
        speechSynthesis.speak(utterance);
        setIsPlaying(true);
    };

    useEffect(() => {
        return () => {
            if (isPlaying) {
                speechSynthesis.cancel();
                setIsPlaying(false);
            }
        };
    }, [isPlaying]);


    // 이전 페이지로 가는 함수
    const goToPreviousCartoon = () => {
        if (isPlaying) {
            speechSynthesis.cancel();
        }
        const prevIndex = currentCartoonIndex > 0 ? currentCartoonIndex - 1 : 0;
        changePage(prevIndex);
    };

// 다음 페이지로 가는 함수
    const goToNextCartoon = () => {
        if (isPlaying) {
            speechSynthesis.cancel();
            setIsPlaying(false);
        }
        const nextIndex = currentCartoonIndex < cartoonList.length - 1 ? currentCartoonIndex + 1 : currentCartoonIndex;
        changePage(nextIndex);
        if (nextIndex === cartoonList.length - 1) {
            setOpen(true); // 마지막 페이지에 도달했을 때 모달 열기
        }
    };

    const changePage = (newIndex: number) => {
        setAnimation('fadeOut');

        setTimeout(() => {
            setCurrentCartoonIndex(newIndex);
            setAnimation('fadeIn');
        }, 200); // 0.2초 후에 새 페이지 인덱스 설정 및 페이드인 애니메이션 적용
    };


    const goToQuiz = () => {
        navigate('/mainchild/stage/quiz/start');
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className={styles.mainContainer}>
            <div className={`${styles.cartoonContainer} ${styles[animation]}`} style={{ position: 'relative' }}>
                <img src={cartoonList[currentCartoonIndex].pageImg} alt="만화" />

                {/* 재생/중지 버튼 */}
                <button onClick={playTTS} className={styles.audioButton}>
                    <img src={isPlaying ? stop : play} alt={isPlaying ? "중지" : "재생"} />
                </button>
            </div>

            {/* 이전/다음 페이지 버튼 */}
            <div className={styles.buttonContainer}>
                <button className={styles.backButton} onClick={goToPreviousCartoon}></button>
                <button className={styles.frontButton} onClick={goToNextCartoon}></button>
            </div>

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
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        퀴즈를 풀러 가볼까요?
                    </Typography>
                    <Button
                        sx={{
                            marginRight: 3,
                            marginTop: 1.2,
                            width: 110,
                            height: '42px',
                            fontSize: '17px',
                            backgroundColor: '#0064FF',
                            borderRadius: 3,
                            color: 'white',
                            fontWeight: 600,
                        }}
                        onClick={goToQuiz}
                    >
                        퀴즈 풀기
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Cartoon;