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

// const downicon = require('@/assets/downicon.png');

const Currency: React.FC = () => {
  const [countryId, setCountryId] = useRecoilState(currencydetailState)
  const [usaBasicRate, setUsaBasicRate] = useState('')
  const [euBasicRate, setEuBasicRate] = useState('')
  const [japanBasicRate, setJapanBasicRate] = useState('')
  const [chinaBasicRate, setChinaBasicRate] = useState('')
  const [usaAmount, setUsaAmount] = useState('')
  const [euAmount, setEuAmount] = useState('')
  const [japanAmount, setJapanAmount] = useState('')
  const [chinaAmount, setChinaAmount] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const fetchTodayCurrency = async () => {
      try {
        const response = await today()
        setUsaBasicRate(response.data.data[0].basicRate)
        setJapanBasicRate(response.data.data[1].basicRate)
        setEuBasicRate(response.data.data[2].basicRate)
        setChinaBasicRate(response.data.data[3].basicRate)
        setUsaAmount(response.data.data[0].amount)
        setJapanAmount(response.data.data[1].amount)
        setEuAmount(response.data.data[2].amount)
        setChinaAmount(response.data.data[3].amount)
      } catch (error) {
        console.error('API 요청 중 오류 발생: ', error)
      }
    }
    fetchTodayCurrency()
  }, [])
  const navigatToDetail = (Id: number) => {
    // 상태 업데이트 함수를 사용하여 countryId 상태를 변경
    setCountryId(Id)
    // startTransition을 사용하여 비동기 업데이트 처리
    startTransition(() => {
      navigate('/currency/detail')
    })
  }
  return (
    <div>
      <Navbar />
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
            <ListItem
              disablePadding
              sx={{
                minHeight: '130px',
                alignItems: 'center',
                backgroundColor: 'transparent',
                marginBottom: '15px',
              }}
            >
              <ListItemButton
                onClick={() => navigatToDetail(1)}
                sx={{
                  minHeight: '120px',
                  backgroundColor: 'white',
                  borderRadius: '25px',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: '#DEE7FF',
                  },
                }}
              >
                <div className={styles.col1}>
                  <div className={styles.countryInfo}>
                    <img
                      src={usa}
                      alt="usa flag"
                      style={{ height: '4.5vw', marginRight: '20px' }}
                    />
                    <div className={styles.row0}>미국달러</div>
                  </div>
                  <div className={styles.rightContainer}>
                    <div className={styles.col2}>
                      <div className={styles.row1}>{usaBasicRate}원</div>
                      <div className={styles.row2red}>
                        {usaAmount}원
                        <img
                          src={up}
                          alt="up"
                          style={{
                            height: '1.6vw',
                            marginLeft: '4px',
                            marginTop: '2px',
                          }}
                        />
                      </div>
                    </div>
                    <ArrowForwardIosRoundedIcon
                      sx={{ fontSize: '35px', color: '#C2C2C9' }}
                    />
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                minHeight: '130px',
                alignItems: 'center',
                backgroundColor: 'transparent',
                marginBottom: '15px',
              }}
            >
              <ListItemButton
                onClick={() => navigatToDetail(3)}
                sx={{
                  minHeight: '120px',
                  backgroundColor: 'white',
                  borderRadius: '25px',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: '#DEE7FF',
                  },
                }}
              >
                <div className={styles.col1}>
                  <div className={styles.countryInfo}>
                    <img
                      src={japan}
                      alt="japan flag"
                      style={{ height: '4.5vw', marginRight: '20px' }}
                    />
                    <div className={styles.row0}>일본엔</div>
                  </div>
                  <div className={styles.rightContainer}>
                    <div className={styles.col2}>
                      <div className={styles.row1}>{japanBasicRate}원</div>
                      <div className={styles.row2blue}>
                        {japanAmount}원
                        <img
                          src={down}
                          alt="down"
                          style={{
                            height: '1.6vw',
                            marginLeft: '4px',
                            marginTop: '2px',
                          }}
                        />
                      </div>
                    </div>
                    <ArrowForwardIosRoundedIcon
                      sx={{ fontSize: '35px', color: '#C2C2C9' }}
                    />
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                minHeight: '130px',
                alignItems: 'center',
                backgroundColor: 'transparent',
                marginBottom: '15px',
              }}
            >
              <ListItemButton
                onClick={() => navigatToDetail(2)}
                sx={{
                  minHeight: '120px',
                  backgroundColor: 'white',
                  borderRadius: '25px',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: '#DEE7FF',
                  },
                }}
              >
                <div className={styles.col1}>
                  <div className={styles.countryInfo1}>
                    <img
                      src={europe}
                      alt="europe flag"
                      style={{ height: '6vw', marginRight: '10px' }}
                    />
                    <div className={styles.row0}>유럽유로</div>
                  </div>
                  <div className={styles.rightContainer}>
                    <div className={styles.col2}>
                      <div className={styles.row1}>{euBasicRate}원</div>
                      <div className={styles.row2red}>
                        {euAmount}원
                        <img
                          src={up}
                          alt="up"
                          style={{
                            height: '1.6vw',
                            marginLeft: '4px',
                            marginTop: '2px',
                          }}
                        />
                      </div>
                    </div>
                    <ArrowForwardIosRoundedIcon
                      sx={{ fontSize: '35px', color: '#C2C2C9' }}
                    />
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                minHeight: '130px',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
              id="my-anchor"
            >
              <ListItemButton
                onClick={() => navigatToDetail(4)}
                sx={{
                  minHeight: '120px',
                  backgroundColor: 'white',
                  borderRadius: '25px',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: '#DEE7FF',
                  },
                }}
              >
                <div className={styles.col1}>
                  <div className={styles.countryInfo}>
                    <img
                      src={china}
                      alt="china flag"
                      style={{ height: '4.4vw', marginRight: '20px' }}
                    />
                    <div className={styles.row0}>중국위안</div>
                  </div>
                  <div className={styles.rightContainer}>
                    <div className={styles.col2}>
                      <div className={styles.row1}>{chinaBasicRate}원</div>
                      <div className={styles.row2red}>
                        {chinaAmount}원
                        <img
                          src={up}
                          alt="up"
                          style={{
                            height: '1.6vw',
                            marginLeft: '4px',
                            marginTop: '2px',
                          }}
                        />
                      </div>
                    </div>
                    <ArrowForwardIosRoundedIcon
                      sx={{ fontSize: '35px', color: '#C2C2C9' }}
                    />
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        {/* <div className="body">

          <Card className={styles.card}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={usaflag}
                alt={`usa flag`}
                style={{ width: '100px', height: '60px' }}
              />
              <Typography className={styles.currencyInfo}>
                {'미국 달러'}
                {usaBasicRate}
              </Typography>
              <Box
                component="span"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <img src={upicon} alt="Change icon" />
                {usaAmount}
              </Box>
              <CardActions>
                <Button
                  size="small"
                  className={styles.detailButton}
                  onClick={() => navigatToDetail(1)}
                >
                  자세히보기
                </Button>
              </CardActions>
            </Box>
          </Card>

          <Card className={styles.card}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={europeflag}
                alt={`europe flag`}
                style={{ width: '100px', height: '60px' }}
              />
              <Typography className={styles.currencyInfo}>
                {'유럽 유로'}
                {euBasicRate}
              </Typography>
              <Box
                component="span"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <img src={upicon} alt="Change icon" />
                {euAmount}
              </Box>
              <CardActions>
                <Button
                  size="small"
                  className={styles.detailButton}
                  onClick={() => navigatToDetail(3)}
                >
                  자세히보기
                </Button>
              </CardActions>
            </Box>
          </Card>

          <Card className={styles.card}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={japanflag}
                alt={`japan flag`}
                style={{ width: '100px', height: '60px' }}
              />
              <Typography className={styles.currencyInfo}>
                {'일본 엔'}
                {japanBasicRate}
              </Typography>
              <Box
                component="span"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <img src={upicon} alt="Change icon" />
                {japanAmount}
              </Box>
              <CardActions>
                <Button
                  size="small"
                  className={styles.detailButton}
                  onClick={() => navigatToDetail(2)}
                >
                  자세히보기
                </Button>
              </CardActions>
            </Box>
          </Card>
 
          <Card className={styles.card}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={chinaflag}
                alt={`china flag`}
                style={{ width: '100px', height: '60px' }}
              />
              <Typography className={styles.currencyInfo}>
                {'중국 위안'}
                {chinaBasicRate}
              </Typography>
              <Box
                component="span"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <img src={upicon} alt="Change icon" />
                {chinaAmount}
              </Box>
              <CardActions>
                <Button
                  size="small"
                  className={styles.detailButton}
                  onClick={() => navigatToDetail(4)}
                >
                  자세히보기
                </Button>
              </CardActions>
            </Box>
          </Card>
        </div> */}
      </div>
    </div>
  )
}

export default Currency
