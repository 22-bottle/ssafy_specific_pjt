import React from 'react'
import styles from './mypoint.module.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Mypoint: React.FC = () => {
  const navigate = useNavigate()

  const askClick = () => {
    navigate('/childwallet/ask')
  }

  // const currencyButton = () => {
  //   navigate('/currency/detail')
  // }

  return (
    <div className={styles.container}>
      {/* 메인1 */}
      <div className={styles.pointtitle}>획득 포인트</div>
      <div className={styles.main}>
        <div className={styles.horizontal}>
          <div className={styles.possibletext}>이승재님의 환전 가능 금액 </div>
          <div className={styles.possiblemoney}>총 20,226원</div>
        </div>

        <div className={styles.line}></div>

        {/* 미국 */}
        <div className={styles.horizontal}>
          <div className={styles.country}>미국달러</div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유</div>
            <div className={styles.money}>7.5달러 = 3,996.99원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={askClick}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                paddingBottom: '3px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
        </div>

        {/* <div className={styles.horizontal}>
          <div className={`${styles.textcolor} ${styles.country}`}>일본엔</div>
          <div className={styles.horizontal}>
            <div className={`${styles.textcolor} ${styles.context}`}>보유</div>
            <div className={`${styles.textcolor} ${styles.money}`}>
              10.5엔 = 1,771.58원
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              disableElevation
              onClick={askClick}
              sx={{
                width: 140,
                height: '42px',
                fontSize: '17px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
        </div>

        <div className={styles.horizontal}>
          <div className={`${styles.textcolor} ${styles.country}`}>
            유럽유로
          </div>
          <div className={styles.horizontal}>
            <div className={`${styles.textcolor} ${styles.context}`}>보유</div>
            <div className={`${styles.textcolor} ${styles.money}`}>
              2.0유로 = 14,457.5원
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              disableElevation
              onClick={askClick}
              sx={{
                width: 140,
                height: '42px',
                fontSize: '17px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
        </div>

        <div className={styles.horizontal}>
          <div className={`${styles.textcolor} ${styles.country}`}>
            중국위안
          </div>
          <div className={styles.horizontal}>
            <div className={`${styles.textcolor} ${styles.context}`}>보유</div>
            <div className={`${styles.textcolor} ${styles.money}`}>
              0위안 = 0원
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              disableElevation
              onClick={askClick}
              sx={{
                width: 140,
                height: '42px',
                fontSize: '17px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
        </div> */}
      </div>

      {/* <p>실시간 환율 확인하기</p>
      <div style={divBorder}>
        <div style={divBorder}>
          <h2>실시간 환율</h2>
          <p>어제보다 오르락 내리락</p>
        </div>
        <div style={divBorder}>
          미국달러 1,300원<button onClick={currencyButton}>버튼</button>
        </div>
        <div style={divBorder}>
          일본엔 900원<button onClick={currencyButton}>버튼</button>
        </div>
        <div style={divBorder}>
          유럽유로 1400원<button onClick={currencyButton}>버튼</button>
        </div>
        <div style={divBorder}>
          중국위안 190원<button onClick={currencyButton}>버튼</button>
        </div>
      </div> */}
    </div>
  )
}

export default Mypoint
