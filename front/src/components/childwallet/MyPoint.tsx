import React, { useState } from 'react'
import Lottie from 'lottie-react'
import usalottie from '../../assets/lottie/america.json'
import japanlottie from '../../assets/lottie/japan.json'
import europelottie from '../../assets/lottie/europe.json'
import chinalottie from '../../assets/lottie/china.json'
import styles from './mypoint.module.css'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import updown from '../../assets/updow.png'
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
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import AskWon from './AskWon'
import AskComplete from './AskComplete'
import { useNavigate } from 'react-router-dom'

const Mypoint: React.FC = () => {
  const navigate = useNavigate()

  // 환전 요청 모달
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState('ask')

  const handleClose = () => {
    setOpen(false)
    setModalContent('ask') // 모달을 닫을 때 항상 'ask' 상태로 리셋
  }

  const handleComplete = () => {
    setModalContent('complete')
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow:
      '-6px 6px 10px rgba(0, 0, 0, 0.364), 4px 4px 8px rgba(0, 0, 0, 0.121)',
  }

  const currencyButton = () => {
    navigate('/currency/detail')
  }

  function scrollToAnchor(anchorId: string) {
    const anchorElement = document.getElementById(anchorId)
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

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
        <div className={styles.horizontal2}>
          <div className={styles.country}>
            <Lottie
              animationData={usalottie}
              style={{ width: '4.5vw', height: '4.5vw', marginRight: '6px' }}
            />
            미국달러
          </div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유 7.5달러</div>
            <div className={styles.money}>3,996.99원</div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.smallertext}>7.5달러</div>
            <div className={styles.smallertext}>3,996.99원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => setOpen(true)}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                marginTop: '27px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
          {/* 환전 요청 모달 */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="ask-won-modal-title"
            aria-describedby="ask-won-modal-description"
          >
            <Box sx={style}>
              {modalContent === 'ask' ? (
                <AskWon onConfirm={handleComplete} onClose={handleClose} />
              ) : (
                <AskComplete onClose={handleClose} />
              )}
            </Box>
          </Modal>
        </div>

        {/* 일본 */}
        <div className={styles.horizontal2}>
          <div className={styles.country}>
            <Lottie
              animationData={japanlottie}
              style={{ width: '4.5vw', height: '4.5vw', marginRight: '6px' }}
            />
            일본엔
          </div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유 10.5엔</div>
            <div className={styles.money}>1,771.58원</div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.smallertext}>10.5엔</div>
            <div className={styles.smallertext}>1,771.58원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => setOpen(true)}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                paddingBottom: '3px',
                marginTop: '27px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
          {/* 환전 요청 모달 */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="ask-won-modal-title"
            aria-describedby="ask-won-modal-description"
          >
            <Box sx={style}>
              {modalContent === 'ask' ? (
                <AskWon onConfirm={handleComplete} onClose={handleClose} />
              ) : (
                <AskComplete onClose={handleClose} />
              )}
            </Box>
          </Modal>
        </div>

        {/* 유럽 */}
        <div className={styles.horizontal2}>
          <div className={styles.country}>
            <Lottie
              animationData={europelottie}
              style={{ width: '4.5vw', height: '4.5vw', marginRight: '6px' }}
            />
            유럽유로
          </div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유 2.0유로</div>
            <div className={styles.money}>3,000원</div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.smallertext}>2.0유로</div>
            <div className={styles.smallertext}>3,000원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => setOpen(true)}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                paddingBottom: '3px',
                marginTop: '27px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
          {/* 환전 요청 모달 */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="ask-won-modal-title"
            aria-describedby="ask-won-modal-description"
          >
            <Box sx={style}>
              {modalContent === 'ask' ? (
                <AskWon onConfirm={handleComplete} onClose={handleClose} />
              ) : (
                <AskComplete onClose={handleClose} />
              )}
            </Box>
          </Modal>
        </div>

        {/* 중국 */}
        <div className={styles.horizontal2}>
          <div className={styles.country}>
            <Lottie
              animationData={chinalottie}
              style={{ width: '4.5vw', height: '4.5vw', marginRight: '6px' }}
            />
            중국위안
          </div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유 0위안</div>
            <div className={styles.money}>0원</div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.smallertext}>0위안</div>
            <div className={styles.smallertext}>0원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => setOpen(true)}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                paddingBottom: '3px',
                marginTop: '27px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
          {/* 환전 요청 모달 */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="ask-won-modal-title"
            aria-describedby="ask-won-modal-description"
          >
            <Box sx={style}>
              {modalContent === 'ask' ? (
                <AskWon onConfirm={handleComplete} onClose={handleClose} />
              ) : (
                <AskComplete onClose={handleClose} />
              )}
            </Box>
          </Modal>
        </div>
      </div>

      <div className={`${styles.main} ${styles.help}`}>
        <Link
          onClick={() => scrollToAnchor('my-anchor')}
          className="link-pointer"
          sx={{
            color: '#bdc6d7;',
            textDecorationColor: '#bdc6d7',
          }}
        >
          실시간 환율 확인하기
        </Link>
      </div>

      <div className={styles.main2}>
        <div className={styles.pointtitle}>실시간 환율</div>
        <div className={styles.subtitle}>
          어제보다
          <img
            src={updown}
            alt="boy"
            style={{ height: '25px', marginTop: 3, marginLeft: '15px' }}
          />
        </div>
        <div className={styles.maindiv}>
          {/* Material UI: Lists */}
          <List>
            <ListItem
              disablePadding
              sx={{ minHeight: '130px', alignItems: 'center' }}
            >
              <ListItemButton
                onClick={currencyButton}
                sx={{ minHeight: '100px' }}
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
                      <div className={styles.row1}>1,332원</div>
                      <div className={styles.row2red}>
                        3.34원
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
              sx={{ minHeight: '130px', alignItems: 'center' }}
            >
              <ListItemButton
                onClick={currencyButton}
                sx={{ minHeight: '100px', alignItems: 'center' }}
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
                      <div className={styles.row1}>885원</div>
                      <div className={styles.row2blue}>
                        0.38원
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
              sx={{ minHeight: '130px', alignItems: 'center' }}
            >
              <ListItemButton
                onClick={currencyButton}
                sx={{ minHeight: '100px' }}
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
                      <div className={styles.row1}>1,445원</div>
                      <div className={styles.row2red}>
                        4.45원
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
              sx={{ minHeight: '130px', alignItems: 'center' }}
              id="my-anchor"
            >
              <ListItemButton
                onClick={currencyButton}
                sx={{ minHeight: '100px' }}
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
                      <div className={styles.row1}>187원</div>
                      <div className={styles.row2red}>
                        0.42원
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
      </div>
    </div>
  )
}

export default Mypoint
