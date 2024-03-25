import React from "react";
import styles from './askWon.module.css'
import { useNavigate } from 'react-router-dom';
import logoImage from "@/assets/logo.png";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Button from "@mui/material/Button";

const Askwon:React.FC= () => {

    const navigate = useNavigate();

    const completeClick = () => {
        navigate('/childwallet/askcomplete');
      };

    const divBorder = {
        border: "1px solid black",       
        margin: "10px"
    }


    return (
        <div className={styles.container}>
            {/* 로고 이미지 */}
            <img
                src={logoImage}
                alt="LOGO"
                style={{
                    height: '80px',
                    marginTop: '30px',
                    marginRight: '320px',
                    marginBottom: '20px',
                }}
            />
            {/* 메인 */}
            <div className={styles.materialContainer}>
                {/* 체크 아이콘 */}
                <div className={styles.icon}>
                    <CheckCircleRoundedIcon style={{ color: '#0064FF', fontSize: 100 }} />
                </div>
                {/* 글씨 */}
                <div className={styles.text}>
                    <div className={styles.maintext1}>10유로 (14,457.5원)<br/>
                        환전을 요청할까요?</div>
                    <div className={styles.subtext1}>환전 요청 금액을 다시한번 확인해주세요</div>
                </div>
                {/* 버튼 */}
                <div className={styles.button}>
                    <Button
                        variant="contained"
                        disableElevation
                        onClick={ completeClick }
                        sx={{
                            width: '100%',
                            height: '55px',
                            fontSize: '20px',
                            backgroundColor: '#0064FF',
                            borderRadius: '15px',
                        }}
                    >
                        환전 요청 하기
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Askwon;