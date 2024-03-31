import React, { startTransition, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { stageSubjectState } from '@/state/StageSubjectAtoms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import question from '@/assets/questionmark.png'
import { country } from '@/api/child'
import styles from './USA.module.css'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'
import logoImage from '../../assets/logo.png'

const USA: React.FC = () => {
  const [stageId, setStageId] = useRecoilState(stageSubjectState)
  const [stageOneAns, setStageOneAns] = useState(0)
  const [stageTwoAns, setStageTwoAns] = useState(0)
  const [stageThreeAns, setStageThreeAns] = useState(0)
  const [stageFourAns, setStageFourAns] = useState(0)
  const [stageFiveAns, setStageFiveAns] = useState(0)
  // 물음표 아이콘 클릭
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const closeDescription = () => {
    setShowDescription(false)
  }

  const navigate = useNavigate()
  useEffect(() => {
    const fetchUsaStage = async () => {
      try {
        const response = await country(1)
        setStageOneAns(response.data.data[0].answer)
        setStageTwoAns(response.data.data[1].answer)
        setStageThreeAns(response.data.data[2].answer)
        setStageFourAns(response.data.data[3].answer)
        setStageFiveAns(response.data.data[4].answer)
      } catch (error) {
        console.error('API 요청 중 오류 발생: ', error)
      }
    }
    fetchUsaStage()
  }, [])
  const stageStart = (Id: number, answer: number) => {
    // 이전 stage의 정답수가 7이상일때만 활성화
    if (answer >= 7) {
      setStageId(Id)

      startTransition(() => {
        navigate('/mainchild/stage/usa')
      })
    } else {
      // 아니면 접근 못함 알림
      alert('접근할 수 없습니다. 이전 스테이지를 완료해주세요!')
    }
  }
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // navbar open
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true)
  }

  // navbar close
  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  // navbar Drawer
  const DrawerContent = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List
        sx={{
          display: 'flex',
          paddingTop: '5px',
        }}
      >
        <ListItem>
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: '60px', marginTop: '-10px', marginLeft: '40px' }}
          />
        </ListItem>
        <ListItem
          sx={{
            paddingTop: '10px',
            paddingBottom: '0px',
            width: '70%',
            paddingLeft: '180px',
          }}
        >
          <Button
            onClick={() => {
              /* 월드맵 이동 로직 */
            }}
            sx={{
              fontSize: '20px',
              color: '#585865',
              fontWeight: 'bold',
            }}
          >
            월드맵
          </Button>
        </ListItem>
        <ListItem
          sx={{ paddingTop: '10px', paddingBottom: '0px', width: '95%' }}
        >
          <Button
            onClick={() => {
              /* 포인트/실시간 환율 이동 로직 */
            }}
            sx={{
              fontSize: '20px',
              color: '#585865',
              fontWeight: 'bold',
            }}
          >
            포인트/실시간 환율
          </Button>
        </ListItem>
        <ListItem sx={{ paddingTop: '10px', paddingBottom: '0px' }}>
          <Button
            onClick={() => {
              /* 내 지갑 이동 로직 */
            }}
            sx={{
              fontSize: '20px',
              color: '#585865',
              fontWeight: 'bold',
            }}
          >
            내 지갑
          </Button>
        </ListItem>
        <ListItem sx={{ paddingTop: '10px', paddingBottom: '0px' }}>
          <Button
            onClick={() => {
              /* 로그아웃 로직 */
            }}
            sx={{
              width: '120px', // 버튼의 가로 길이
              height: '45px', // 버튼의 세로 길이
              fontSize: '18px', // 폰트 사이즈
              backgroundColor: '#585865',
              color: 'white', // 기본 폰트 색상
              borderRadius: '10px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#202632', // 호버 상태에서의 배경색 변경
              },
            }}
          >
            로그아웃
          </Button>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div className={styles.back}>
      <h1 className={styles.title}>Stage를 클릭해서 퀴즈를 시작하세요!</h1>
      <div className={styles.backgroundIMG}></div>
      <div className={styles.usamap}></div>
      {/* 모달 버튼 */}
      <IconButton
        onClick={handleDrawerOpen}
        className={styles.navbar}
        sx={{
          backgroundColor: 'rgba(255, 164, 58, 0.95)',
          borderRadius: '0 0 40px 40px', // 아래쪽 모서리에만 border-radius 적용
          '&:hover': {
            backgroundColor: '#FF8D09', // 호버 배경색
          },
        }}
      >
        <KeyboardDoubleArrowDownRoundedIcon
          sx={{ fontSize: '50px', color: 'white' }}
        />
      </IconButton>
      <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerClose}>
        {DrawerContent()}
      </Drawer>
      <div onClick={() => stageStart(1, 10)} className={styles.stage1}>
        <div className={styles.rating}>{stageOneAns}/10</div>
      </div>
      <div
        onClick={() => stageStart(2, stageOneAns)}
        className={
          stageOneAns >= 7 ? styles.active_stage2 : styles.unactive_stage2
        }
      >
        <div className={styles.rating}>{stageTwoAns}/10</div>
      </div>
      <div
        onClick={() => stageStart(3, stageTwoAns)}
        className={
          stageTwoAns >= 7 ? styles.active_stage3 : styles.unactive_stage3
        }
      >
        <div className={styles.rating}>{stageThreeAns}/10</div>
      </div>
      <div
        onClick={() => stageStart(4, stageThreeAns)}
        className={
          stageThreeAns >= 7 ? styles.active_stage4 : styles.unactive_stage4
        }
      >
        <div className={styles.rating}>{stageFourAns}/10</div>
      </div>
      <div
        onClick={() => stageStart(5, stageFourAns)}
        className={
          stageFourAns >= 7 ? styles.active_stage5 : styles.unactive_stage5
        }
      >
        <div className={styles.rating}>{stageFiveAns}/10</div>
      </div>

      <div className={styles.fairyContainer}>
        <div className={styles.fairy}>
          {!showDescription && (
            <img
              src={question}
              alt="question"
              className={styles.questionIcon}
              onClick={toggleDescription}
            />
          )}
        </div>
        {showDescription && (
          <div className={styles.description}>
            <button className={styles.closeButton} onClick={closeDescription}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className={styles.fontcol1}>
              연료를 가져가고 싶다면 내가 내는 문제를 맞혀야만 해!
            </div>
            <div className={styles.fontcol2}>
              하지만 너무 걱정하지 마! 만화를 잘 보면 쉽게 풀 수 있어!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default USA
