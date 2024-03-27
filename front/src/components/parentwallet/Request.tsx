import React, { useState } from 'react'
import styles from './request.module.css'
import wallet from '../../assets/wallet.png'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import { SvgIconProps } from '@mui/material/SvgIcon'
import request from '../../assets/moneysending.png'
import complete from '../../assets/moneycomplete.png'
import { useNavigate } from 'react-router-dom'

import { useRecoilValue } from 'recoil'
import { accountSelector, transSelector } from '@/state/AccountSelectors'
import { faL } from '@fortawesome/free-solid-svg-icons'

interface AccountData {
  accountNo: string
  balance: string
  frTranList: frTran[]
}

interface frTran {
  frTranId: number
  balance: number
  countryId: number
  frBalance: number
  code: string
  createTime: string
  childId: number
  name: string
  transacted: boolean
}

interface TransData {}

const Request: React.FC = () => {
  // 계좌 변수
  const { accountNo, balance, frTranList } =
    useRecoilValue<AccountData>(accountSelector)

  const transData = useRecoilValue<TransData>(transSelector)

  // 자녀이름 select
  const CustomExpandIcon = (props: SvgIconProps) => {
    return <ExpandMoreRoundedIcon {...props} />
  }
  const [billtype, setbilltype] = useState<string>('10')
  const handleChange = (event: SelectChangeEvent<string>) => {
    setbilltype(event.target.value)
  }

  // 거래 내역
  interface Transaction {
    type: number
    date: string
    main: string
    child: string
    money: string
    done?: string
    balance?: string
  }

  const transactions: Transaction[] = [
    {
      type: 1,
      date: '3월 8일',
      main: '송금 요청',
      child: '이승재',
      money: '5,220',
      done: 'no',
    },
    {
      type: 2,
      date: '2월 25일',
      main: '송금 완료',
      child: '이승재',
      money: '3,250',
      balance: '85,000,510',
    },
    {
      type: 2,
      date: '2월 23일',
      main: '송금 완료',
      child: '이무진',
      money: '1,523',
      balance: '84,998,987',
    },
    {
      type: 1,
      date: '2월 17일',
      main: '송금 요청',
      child: '이승재',
      money: '3,250',
      done: 'yes',
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.themetext}>마이 지갑</div>

      {/* 메인1 */}
      <div className={styles.main1}>
        {/* 지갑 사진 */}
        <div className={styles.image}>
          <img src={wallet} alt="wallet" style={{ height: '180px' }} />
        </div>
        {/* 계좌 정보 */}
        <div className={`${styles.horizontal} ${styles.banklayout}`}>
          <div className={styles.mybank}>계좌번호</div>
          <div className={styles.myaccount}>{accountNo}</div>
        </div>
        {/* 잔액 */}
        <div className={styles.horizontal}>
          <div className={styles.balance}>{balance}</div>
          <div className={styles.won}>원</div>
        </div>
      </div>

      {/* 메인2 */}
      <div className={styles.main2}>
        {/* 기간 필터 */}
        <div className={styles.filter}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={billtype}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              disableUnderline
              IconComponent={CustomExpandIcon}
              sx={{
                '.MuiSelect-select': {
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#585865',
                  paddingLeft: '30px',
                  paddingTop: '14px',
                },
                '.MuiSvgIcon-root': {
                  fontSize: '40px',
                  paddingBottom: '5px',
                },
              }}
            >
              <MenuItem value={'10'}>전체</MenuItem>
              <MenuItem value={'20'}>입금</MenuItem>
              <MenuItem value={'30'}>출금</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* 각각 내역 */}
        {frTranList.map((transaction, index) => (
          <div key={index} className={styles.accountcontent}>
            <div className={styles.date}>{transaction.createTime}</div>
            <div className={styles.detail}>
              <img
                src={transaction.transacted === false ? request : complete}
                alt="Transaction Type"
                style={{ width: '65px', height: '65px' }}
              />
              <div className={styles.subdetail1}>
                <div className={styles.sub1text1}>
                  {transaction.transacted ? '송금완료' : '송금요청'}
                </div>
                <div className={styles.sub1text2}>{transaction.name}님</div>
              </div>
              {transaction.transacted === false ? (
                <div className={styles.subdetail2}>
                  <div className={styles.sub2text1}>
                    {transaction.balance}원
                  </div>
                  {transaction.transacted === false ? (
                    <div className={styles.sub2text2}>송금하기</div>
                  ) : null}
                </div>
              ) : (
                <div className={styles.subdetail2}>
                  <div className={styles.sub2text1}>
                    -{transaction.balance}원
                  </div>
                  {transaction.balance && (
                    <div className={styles.sub2text3}>{balance}원</div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Request
