import React from 'react'
import styles from './askWon.module.css'
import { useNavigate } from 'react-router-dom'
import logoImage from '@/assets/logo.png'
import IconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import Button from '@mui/material/Button'

// 닫기 버튼
interface ChildAddProps {
  handleClose: () => void
}

const Askwon: React.FC<ChildAddProps> = ({ handleClose }) => {
  const navigate = useNavigate()

  const completeClick = () => {
    navigate('/childwallet/askcomplete')
  }

  return (
    <div className={styles.container}>
      {/* 닫기 버튼 */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: '15px',
          right: '20px',
        }}
      >
        <CloseRoundedIcon sx={{ fontSize: '35px' }} />
      </IconButton>

      {/* 메인 */}
      <div className={styles.materialContainer}>
        {/* 체크 아이콘 */}
        <div className={styles.icon}>
          <CheckCircleRoundedIcon style={{ color: '#0064FF', fontSize: 100 }} />
        </div>
        {/* 글씨 */}
        <div className={styles.text}>
          <div className={styles.maintext1}>이채은님에게</div>
          <div className={styles.maintext2}>10유로 (14,457.5원)</div>
          <div className={styles.maintext3}> 환전을 요청할까요?</div>
          <div className={styles.subtext1}>
            환전 요청 금액을 다시한번 확인해주세요
          </div>
        </div>
        {/* 버튼 */}
        <div className={styles.button}>
          <Button
            variant="contained"
            disableElevation
            onClick={completeClick}
            sx={{
              width: '100%',
              height: '55px',
              fontSize: '20px',
              backgroundColor: '#0064FF',
              borderRadius: '10px',
            }}
          >
            환전 요청 하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Askwon
