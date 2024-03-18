import React from "react";
import { useNavigate } from 'react-router-dom'; 
import styles from './signupcomplete.module.css';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Button from '@mui/material/Button';

const SignupComplete:React.FC = () => { // Component name corrected to start with an uppercase letter
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/signup/account');
    };
    const styleObj = {
        border: '1px solid black', 
        padding: '10px', 
        margin: '10px' 
    }

    return (
      <div className={styles.materialContainer}>
        <div className={styles.box}>
          <div className={styles.icon}>
            <CheckCircleRoundedIcon style={{ color: '#0064FF', fontSize: 100 }} />
          </div>
          <div className={styles.subtitle}>회원가입을 완료했습니다!</div>
          <div className={styles.title1}>이채은님,</div>
          <div className={styles.title2}>환영합니다!</div>

          {/* 회원가입 완료 버튼 */}
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: '100%',
                height: '60px',
                fontSize: '22px',
                backgroundColor: '#0064FF',
              }}
            >
              확인
            </Button>
          </div>
        </div>
      </div>
    );
};

export default SignupComplete;