import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import { blue } from '@mui/material/colors'
import styles from './registeraccount.module.css'
import Button from '@mui/material/Button'
import logoImage from '../../assets/logo.png'

const RegisterAccount: React.FC = () => {
  // 더미데이터
  interface BankAccount {
    bank: string
    account: string
  }

  const bankAccounts: BankAccount[] = [
    { bank: '하나은행', account: '58092403392710' },
    { bank: '국민은행', account: '58092403392711' },
    { bank: '한국은행', account: '58092403392712' },
    { bank: '카카오뱅크', account: '58092403392713' },
    { bank: '토스뱅크', account: '58092403392714' },
    { bank: '농협은행', account: '58092403392715' },
    { bank: '수협은행', account: '58092403392716' },
    { bank: '신한은행', account: '58092403392717' },
  ]

  // 리스트 중에 내 계좌 선택
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)

  const handleListItemClick = (account: string) => {
    setSelectedAccount(account)
  }

  return (
    <div className={styles.container}>
      {/* 로고 이미지 */}
      <img
        src={logoImage}
        alt="LOGO"
        style={{
          height: '70px',
          marginTop: '30px',
          marginRight: '480px',
          marginBottom: '15px',
        }}
      />

      <div className={styles.materialContainer}>
        <div className={styles.maintext1}>히코를 사용려면 계좌가 필요해요.</div>
        <div className={styles.subtext1}>
          사용하실 계좌를 아래에서 선택해 주세요.
        </div>
        <div className={styles.listContainer}>
          <List
            className={styles.scrollableList}
            sx={{ bgcolor: 'background.paper' }}
          >
            {bankAccounts.map((account, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleListItemClick(account.account)}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#F1F3F7',
                    },
                    border:
                      selectedAccount === account.account
                        ? `2px solid #0064FF`
                        : 'none',
                    borderRadius: '5px',
                    marginBottom: 1,
                    height: '80px',
                    marginLeft: '55px',
                    marginRight: '35px',
                  }}
                >
                  <div className={styles.account}>
                    <div className={styles.acctext1}>{account.bank}</div>
                    <div className={styles.acctext2}>{account.account}</div>
                  </div>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>

        <div className={styles.button}>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: '100%',
              height: '70px',
              fontSize: '20px',
              fontWeight: 'bold',
              backgroundColor: '#0064FF',
              borderRadius: '5px',
            }}
          >
            선택하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterAccount
