import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "@/components/childwallet/AskComplete.module.css";
import logoImage from "@/assets/logo.png";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Button from "@mui/material/Button";

const AskComplete: React.FC = () => {
  const navigate = useNavigate();

  const okClick = () => {
    navigate('/childwallet/point');
  };


  // return (
  //   <div style={divBorder}>
  //     <div style={divBorder}>
  //         <p>아이콘</p>
  //     </div>
  //     <div style={divBorder}>
  //         <p>이채은님에게 <br />
  //         환전을 요청했어요!</p>
  //     </div>
  //     <div style={divBorder}>
  //         <p>환전이 완료되면 알려드릴게요!</p>
  //     </div>
  //     <div style={divBorder}>
  //         <button onClick={okClick}>확인</button>
  //     </div>
  //   </div>
  // );

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
                    <div className={styles.maintext1}>환전을 요청했어요!</div>
                    <div className={styles.subtext1}>환전이 완료되면 알려드릴게요!</div>
                </div>
                {/* 버튼 */}
                <div className={styles.button}>
                    <Button
                        variant="contained"
                        disableElevation
                        onClick={okClick}
                        sx={{
                            width: '100%',
                            height: '55px',
                            fontSize: '20px',
                            backgroundColor: '#0064FF',
                            borderRadius: '15px',
                        }}
                    >
                        확인
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default AskComplete;