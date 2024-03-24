import React from 'react'
import styles from './sendingcomplete.module.css'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import Button from '@mui/material/Button'

const Sendingcomplete: React.FC = () => {
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
  )
}

export default Sendingcomplete
