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
            const utterance = new SpeechSynthesisUtterance(cartoonList[currentCartoonIndex].tts);
            if (voices.length > 1) { // 한국어 목소리가 최소 2개 이상 있어야 함
                utterance.voice = voices[1]; // 두 번째 한국어 목소리 선택
            }
            utterance.onend = () => setIsPlaying(false); // TTS 재생이 끝났을 때
            speechSynthesis.speak(utterance);
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        return () => {
            if (isPlaying) {
                speechSynthesis.cancel();
            }
        };
    }, [isPlaying]);


    const goToPreviousCartoon = () => {
        if (isPlaying) {
            speechSynthesis.cancel();
            setIsPlaying(false);
        }
        setCurrentCartoonIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const goToNextCartoon = () => {
        if (isPlaying) {
            speechSynthesis.cancel();
            setIsPlaying(false);
        }
        if (currentCartoonIndex === 4) {
            setOpen(true);
        } else {
            setCurrentCartoonIndex((prev) => (prev + 1));
        }
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
            <div className={styles.cartoonContainer}>
                <img src={cartoonList[currentCartoonIndex].pageImg} alt="만화" />
                <button onClick={playTTS} className={styles.audioButton}>
                    <img src={isPlaying ? stop : play} alt={isPlaying ? "중지" : "재생"} />
                </button> {/* TTS 재생/중지 버튼에 이미지 적용 */}
            </div>
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