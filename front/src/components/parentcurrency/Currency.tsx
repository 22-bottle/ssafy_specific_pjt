import React, { startTransition, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import usa from '../../assets/flag_usa.png'
import japan from '../../assets/flag_japan.png'
import europe from '../../assets/flag_europe.png'
import china from '../../assets/flag_china.png'
import styles from './Currency.module.css'
import { useRecoilState } from 'recoil'
import { currencydetailState } from '@/state/currencyatoms'
import { today } from '@/api/currency'
import updown from '../../assets/updow.png'
import Navbar from '@/pages/mainparent/navbar'

interface CurrencyData {
  amount: number
  basicRate: number
  exchangeRateId: number
  frType: string
  riseStatus: string
}

const Currency: React.FC = () => {
  const [countryId, setCountryId] = useRecoilState(currencydetailState)
  const [currencyData, setCurrencyData] = useState<CurrencyData[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTodayCurrency = async () => {
      try {
        const response = await today()
        // CurrencyData 형식으로 변환
        const currencyDataList: CurrencyData[] = response.data.data.map(
          (item: any) => ({
            amount: item.amount,
            basicRate: item.basicRate,
            exchangeRateId: item.exchangeRateId,
            frType: item.frType,
            riseStatus: item.riseStatus,
          })
        )
        setCurrencyData(currencyDataList)
      } catch (error) {
        console.error('API 요청 중 오류 발생: ', error)
      }
    }
    fetchTodayCurrency()
  }, [])

  const navigatToDetail = (Id: number) => {
    // 상태 업데이트 함수를 사용하여 countryId 상태를 변경
    setCountryId(Id)
    navigate('/currency/detail')
  }

  const shouldShowNavbar = location.pathname === '/currency'

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      <div className={styles.currencycontainer}>
        <div className={styles.header}>실시간 환율</div>
        <div className={styles.subhead}>
          어제보다
          <img
            src={updown}
            alt="boy"
            style={{ height: '22px', marginTop: 3, marginLeft: '15px' }}
          />
        </div>
        <div className={styles.maindiv}>
          {/* Material UI: Lists */}
          <List sx={{ backgroundColor: 'transparent' }}>
            {currencyData.slice(0, 4).map((currency, index) => (
              <ListItem
                key={currency.exchangeRateId}
                disablePadding
                sx={{
                  minHeight: '130px',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  marginBottom: '15px',
                }}
              >
                <ListItemButton
                  onClick={() => navigatToDetail(index + 1)}
                  sx={{
                    minHeight: '120px',
                    backgroundColor: 'white',
                    borderRadius: '25px',
                    width: '100%',
                    '&:hover': { backgroundColor: '#DEE7FF' },
                  }}
                >
                  <div className={styles.col1}>
                    <div className={styles.countryInfo}>
                      {/* 나라 플래그 이미지 */}
                      {currency.frType === '미국 달러' && (
                        <img
                          src={usa}
                          alt="usa flag"
                          style={{ height: '4.5vw', marginRight: '20px' }}
                        />
                      )}
                      {currency.frType === '일본 옌' && (
                        <img
                          src={japan}
                          alt="japan flag"
                          style={{ height: '4.5vw', marginRight: '20px' }}
                        />
                      )}
                      {currency.frType === '유로' && (
                        <img
                          src={europe}
                          alt="europe flag"
                          style={{ height: '6vw', marginRight: '10px' }}
                        />
                      )}
                      {currency.frType === '위안화' && (
                        <img
                          src={china}
                          alt="china flag"
                          style={{ height: '4.4vw', marginRight: '20px' }}
                        />
                      )}
                      {/* 나라 이름 */}
                      <div className={styles.row0}>
                        {currency.frType === 'USA' && '미국달러'}
                      </div>
                      <div className={styles.row0}>
                        {currency.frType === 'JPN' && '일본엔'}
                      </div>
                      <div className={styles.row0}>
                        {currency.frType === 'EUR' && '유럽유로'}
                      </div>
                      <div className={styles.row0}>
                        {currency.frType === 'CHN' && '중국위안'}
                      </div>
                    </div>
                    <div className={styles.rightContainer}>
                      <div className={styles.col2}>
                        {/* 기본 환율 */}
                        <div className={styles.row1}>
                          {currency.basicRate}원
                        </div>
                        {/* 실시간 환율 */}
                        <div
                          className={
                            currency.riseStatus === 'DECREASE'
                              ? styles.row2blue
                              : styles.row2red
                          }
                        >
                          {currency.amount}원
                          {currency.riseStatus === 'DECREASE' && (
                            <img
                              src={down}
                              alt="down"
                              style={{
                                height: '1.6vw',
                                marginLeft: '4px',
                                marginTop: '2px',
                              }}
                            />
                          )}
                          {currency.riseStatus === 'INCREASE' && (
                            <img
                              src={up}
                              alt="up"
                              style={{
                                height: '1.6vw',
                                marginLeft: '4px',
                                marginTop: '2px',
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <ArrowForwardIosRoundedIcon
                        sx={{ fontSize: '35px', color: '#C2C2C9' }}
                      />
                    </div>
                  </div>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  )
}

export default Currency
