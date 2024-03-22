import React, { useState } from 'react'
import styles from './createaccount.module.css'
import Button from '@mui/material/Button'
import CircleIcon from '@mui/icons-material/Circle'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import logoImage from '../../assets/logo.png'

const CreateAccount: React.FC = () => {
  // 입력된 비밀번호 길이를 추적하는 상태
  const [passwordLength, setPasswordLength] = useState(0)

  // 비밀번호 입력 핸들러
  const handlePasswordInput = (number: number) => {
    // 비밀번호 길이가 4 이하일 때만 업데이트
    if (passwordLength < 4) {
      setPasswordLength(passwordLength + 1)
    }
  }

  // 비밀번호 삭제 핸들러
  const handleDelete = () => {
    if (passwordLength > 0) {
      setPasswordLength(passwordLength - 1)
    }
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
      <div className={styles.walletTitle}>
        {/* 마이지갑으로 돌아가는 버튼 */}
        <Button
          disableElevation
          sx={{
            color: '#585865',
            fontWeight: 'bold',
            width: '150px',
            height: '50px',
            paddingTop: '10px',
          }}
        >
          <KeyboardBackspaceRoundedIcon
            sx={{
              fontSize: '30px',
              paddingBottom: '4px',
              paddingRight: '10px',
            }}
          />
          <div className={styles.navigatetext}>마이 지갑</div>
        </Button>
      </div>
      <div className={styles.walletTitle2}>
        {/* 마이지갑으로 돌아가는 버튼 */}
        <Button
          disableElevation
          sx={{
            color: '#585865',
            fontWeight: 'bold',
            width: '70px',
            height: '60px',
            paddingTop: '10px',
          }}
        >
          <KeyboardBackspaceRoundedIcon
            sx={{
              fontSize: '35px',
              paddingBottom: '7px',
              paddingRight: '10px',
            }}
          />
        </Button>
      </div>

      {/* 메인 */}
      <div className={styles.materialContainer}>
        <div className={styles.text}>
          <div className={styles.main1}>내 아이 '이승재'님 에게</div>
          <div className={styles.main2}>3,000원을 송금할까요?</div>
          <div className={styles.sub}>비밀번호를 입력해 주세요.</div>
        </div>

        {/* 비밀번호 입력 아이콘 */}
        <div className={styles.icon}>
          {[...Array(4)].map((_, index) => (
            <CircleIcon
              key={index}
              sx={{
                fontSize: '30px',
                color: index < passwordLength ? '#fff' : '#6C6C7D',
                marginLeft: index > 0 ? '50px' : '0px',
              }}
            />
          ))}
        </div>

        {/* 키패드 번호 */}
        <div className={styles.numberfirst}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'delete'].map(
            (number, index, arr) => (
              <Button
                key={index}
                disableElevation
                onClick={() => {
                  if (number === 'delete') {
                    handleDelete()
                  } else if (typeof number === 'number') {
                    handlePasswordInput(number)
                  }
                }}
                sx={{
                  color: 'white',
                  fontSize: '35px',
                  fontWeight: 'bold',
                  width: '130px',
                  height: '90px',
                  margin:
                    arr.length - 1 === index && number === 0 ? '0 0 0 0' : '0',
                  marginLeft:
                    index === 9 ? '190px' : index % 3 === 0 ? '60px' : '0',
                }}
              >
                {number === 'delete' ? (
                  <KeyboardBackspaceRoundedIcon sx={{ fontSize: '40px' }} />
                ) : (
                  number
                )}
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
