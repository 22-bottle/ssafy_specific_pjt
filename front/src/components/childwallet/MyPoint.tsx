import React from 'react'
import styles from './mypoint.module.css'
import { useNavigate } from 'react-router-dom'

const Mypoint: React.FC = () => {
  const navigate = useNavigate()

  const askClick = () => {
    navigate('/childwallet/ask')
  }

  const currencyButton = () => {
    navigate('/currency/detail')
  }

  const divBorder = {
    border: '1px solid black',
    margin: '10px',
  }

  return (
    <div className={styles.container}>
      {/* 메인1 */}
      <div className={styles.pointtitle}>획득 포인트</div>
      <div style={divBorder}>
        <div className={styles.horizontal}>
          <div className={styles.possibletext}>이승재님의 환전 가능 금액 </div>
          <div className={styles.possiblemoney}>총 20,226원</div>
        </div>

        {/* 미국 */}
        <div className={styles.horizontal}>
          <div>미국달러</div>
          <div className={styles.horizontal}>
            <div>보유</div>
            <div>7.5달러 = 3,996.99원</div>
          </div>
          <div>
            <button onClick={askClick}>버튼</button>
          </div>
        </div>

        {/* 미국 */}
        <div className={styles.horizontal}>
          <div>미국달러</div>
          <div className={styles.horizontal}>
            <div>보유</div>
            <div>7.5달러 = 3,996.99원</div>
          </div>
          <div>
            <button onClick={askClick}>버튼</button>
          </div>
        </div>
        {/* 미국 */}
        <div className={styles.horizontal}>
          <div>미국달러</div>
          <div className={styles.horizontal}>
            <div>보유</div>
            <div>7.5달러 = 3,996.99원</div>
          </div>
          <div>
            <button onClick={askClick}>버튼</button>
          </div>
        </div>
        {/* 미국 */}
        <div className={styles.horizontal}>
          <div>미국달러</div>
          <div className={styles.horizontal}>
            <div>보유</div>
            <div>7.5달러 = 3,996.99원</div>
          </div>
          <div>
            <button onClick={askClick}>버튼</button>
          </div>
        </div>
        <p></p>
        <p>
          일본엔 보유 10.5엔 = 1,771.58원
          <button onClick={askClick}>버튼</button>
        </p>
        <p>
          유럽유로 보유 2.0유로 = 14,457.5원
          <button onClick={askClick}>버튼</button>
        </p>
        <p>
          중국위안 보유 0위안 = 0원<button onClick={askClick}>버튼</button>
        </p>
      </div>
      <p>실시간 환율 확인하기</p>
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
      </div>
    </div>
  )
}

export default Mypoint
