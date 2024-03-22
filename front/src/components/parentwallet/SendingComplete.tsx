import React from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './sendingcomplete.module.css'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import Button from '@mui/material/Button'

const Sendingcomplete: React.FC = () => {
  // const styleObj = {
  //   border: '1px solid black',
  //   padding: '10px',
  //   margin: '10px',
  // }
  // const navigate = useNavigate()
  // const handleButtonClick = () => {
  //   navigate('/parentwallet')
  // }
  return (
    <div className={styles.container}>
      {/* 메인 */}
      <div className={styles.materialContainer}>
        {/* 체크 아이콘 */}
        <div className={styles.icon}>
          <CheckCircleRoundedIcon style={{ color: '#0064FF', fontSize: 100 }} />
        </div>
        {/* 글씨 */}
        <div className={styles.text}>
          <div className={styles.maintext1}>이승재님에게</div>
          <div className={styles.maintext2}>3,000원을 보냈어요!</div>
          <div className={styles.subtext}>수수료는 히코가 냈어요!</div>
        </div>
        {/* 버튼 */}
        <div className={styles.button}>
          <Button
            variant="contained"
            disableElevation
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
    // <div className="sending-complete-container" style={styleObj}>
    //   <div className="sending-complete-card" style={styleObj}>
    //     <div className="sending-complete-header" style={styleObj}>
    //       {/* Toss logo */}
    //       <img src="/path/to/logo.png" alt="Toss Logo" className="toss-logo" />
    //     </div>
    //     <div className="sending-complete-content" style={styleObj}>
    //       <div className="checkmark-icon" style={styleObj}>
    //         {/* 송금 완료 체크 아이콘 */}
    //       </div>
    //       <div className="confirmation-message" style={styleObj}>
    //         <p>이승재님에게</p>
    //         <br />
    //         <p>3,000원을 보냈습니다!</p>
    //       </div>
    //       <div className="sub-message" style={styleObj}>
    //         수수료는 토스가 냈어요!
    //       </div>
    //     </div>
    //     <div className="sending-complete-footer" style={styleObj}>
    //       <button className="confirm-button" onClick={handleButtonClick}>
    //         확인
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Sendingcomplete
