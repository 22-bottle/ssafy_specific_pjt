import React from 'react'
import Button from '@mui/material/Button'
import styles from './childadd.module.css'

const Childadd: React.FC = () => {
  // 초대코드 저장 변수
  const registCode = '52qpt2'
  // 코드 클립보드 저장 함수
  const handleCopyCode = () => {
    navigator.clipboard.writeText(registCode).then(
      () => {
        alert('코드가 클립보드에 복사되었습니다.')
      },
      (err) => {
        console.error('클립보드에 복사를 실패했습니다: ', err)
      }
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.maintext}>아이 등록 초대 코드</div>
      <div className={styles.sublayout}>
        <div className={styles.subtext}>
          아이 등록을 위한 초대코드를 만들었어요!
        </div>
        <div className={styles.subtext}>
          아이 계정에서 코드를 입려해 보세요.
        </div>
      </div>
      {/* 초대코드 */}
      <div className={styles.invitation}>
        <div className={styles.invitationmain}>
          <div className={styles.invitetext}>내 초대코드</div>
          <div className={styles.invitecode}>{registCode}</div>
        </div>

        {/* 코드 복사 버튼 */}
        <div className="buttoncopy">
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: '100%',
              height: '40px',
              fontSize: '14px',
              marginTop: '25px',
              paddingLeft: '95px',
              paddingRight: '95px',
              backgroundColor: '#0064FF',
              borderRadius: '30px',
              fontWeight: 'bold',
            }}
            onClick={handleCopyCode}
          >
            내 코드 복사하기
          </Button>
        </div>

        {/* 코드 카카오톡 공유 */}
        <div className="share">
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: '100%',
              height: '40px',
              fontSize: '14px',
              marginTop: '14px',
              marginBottom: '5px',
              paddingLeft: '95px',
              paddingRight: '95px',
              backgroundColor: '#FAE100',
              borderRadius: '30px',
              fontWeight: 'bold',
              color: '#3B1D1D',
            }}
            onClick={handleCopyCode}
          >
            카카오톡 공유하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Childadd
