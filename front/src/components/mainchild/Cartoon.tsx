import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Cartoon.module.css'
import { bookList } from "@/state/childselectors";
import { useRecoilValue } from "recoil";
import { StoreMallDirectorySharp } from "@mui/icons-material";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const Cartoon:React.FC= () => {
    // 스테이지 별 해당 만화
    // const [cartoon, setCartoon] =  useState('')
    const navigate = useNavigate()
    const cartoonList = useRecoilValue(bookList) || [];

    const [currentCartoonIndex, setCurrentCartoonIndex] = useState(0);
    const goToPreviousCartoon = () => {
        setCurrentCartoonIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };
    const goToNextCartoon = () => {
        if (currentCartoonIndex === 4) {
            setOpen(true)
        } else {
            setCurrentCartoonIndex((prev) => (prev + 1));
        }
    }

    const [open, setOpen] = useState(false);
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
      }
    const goToQuiz = () => {
        navigate('/mainchild/stage/quiz/start');
    }

    return (
        
        <div className={styles.mainContainer}>
            <div className={styles.cartoonContainer}>
                <img src={cartoonList[currentCartoonIndex].pageImg} alt="만화" />          
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.backButton} onClick={goToPreviousCartoon}></button>
                <button className={styles.frontButton} onClick={goToNextCartoon}></button>
            </div>

            <div>
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
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
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
        </div>
        
    );
};

export default Cartoon;