import React, { useState, useEffect } from 'react'
import styles from './childstatus.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useNavigate } from 'react-router-dom'
import profileBoy1 from '../../assets/profile_boy1.png'
import profileBoy2 from '../../assets/profile_boy2.png'
import profileBoy3 from '../../assets/profile_boy3.png'
import profileBoy4 from '../../assets/profile_boy4.png'
import profileGirl1 from '../../assets/profile_girl1.png'
import profileGirl2 from '../../assets/profile_girl2.png'
import profileGirl3 from '../../assets/profile_girl3.png'
import profileGirl4 from '../../assets/profile_girl4.png'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ChildAdd from './ChildAdd'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { useRecoilValue, useRecoilState } from 'recoil'
import { childIdState } from '@/state/Parentatoms'
import { childrenListState, getChildStudyList } from '@/state/Parentselectors'

const countries = ['usa', 'japan'] // 캐로셀 배열
const countryNames: { [key: string]: string } = {
  usa: '미국',
  japan: '일본',
}
interface ChartData {
  progress: number
  total: number
  correct: number
  datasets: {
    data: number[]
    backgroundColor: string[]
    hoverOffset: number
    borderRadius?: number
  }[]
}

interface DataMap {
  [key: string]: ChartData
}

const dataMap: DataMap = {
  usa: {
    progress: 60,
    total: 50,
    correct: 30,
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#0064FF', '#F5F5F5'],
        hoverOffset: 4,
        borderRadius: 5,
      },
    ],
  },
  japan: {
    progress: 10,
    total: 70,
    correct: 7,
    datasets: [
      {
        data: [10, 90],
        backgroundColor: ['#0064FF', '#F5F5F5'],
        hoverOffset: 4,
        borderRadius: 5,
      },
    ],
  },
}
// 자녀 객체의 타입 정의
type Child = {
  id: number
  name: string
}

const Childstatus: React.FC = () => {
  // 자녀 아이디, 자녀 이름 불러오기
  const [childId, setChildId] = useRecoilState(childIdState)
  const [childName, setChildName] = useState('')
  const ChildList = useRecoilValue(childrenListState)
  const childStudyList = useRecoilValue(getChildStudyList)

  // 컴포넌트가 마운트될 때 첫 번째 자녀를 기본값으로 설정
  useEffect(() => {
    if (ChildList.length > 0) {
      const firstChild = ChildList[0]
      setChildId(firstChild.id)
      setChildName(firstChild.name)
    }
    console.log(childStudyList)
  }, [ChildList]) // ChildList가 변경될 때마다 이 효과 실행

  // 선택 변경 시 자녀의 ID와 이름을 업데이트
  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedId = parseInt(event.target.value, 10) // 선택된 ID를 숫자로 변환
    const selectedChild = ChildList.find(
      (child: any) => child.id === selectedId
    )
    if (selectedChild) {
      setChildId(selectedId)
      setChildName(selectedChild.name)
    }
  }

  const [selectedImage, setSelectedImage] = useState('')

  // 프로필 랜덤 사진
  // 예시로 'boy'로 설정. 동적으로 설정 필요.
  const gender = 'boy' // 'boy' 또는 'girl'
  useEffect(() => {
    const boyImages = [profileBoy1, profileBoy2, profileBoy3, profileBoy4]
    const girlImages = [profileGirl1, profileGirl2, profileGirl3, profileGirl4]
    const images = gender === 'boy' ? boyImages : girlImages
    const randomIndex = Math.floor(Math.random() * images.length)
    setSelectedImage(images[randomIndex])
  }, [gender])

  // useEffect(() => {
  //   const boyImages = [profileBoy1, profileBoy2, profileBoy3, profileBoy4]
  //   const girlImages = [profileGirl1, profileGirl2, profileGirl3, profileGirl4]
  //   const randomIndex = Math.floor(Math.random() * images.length)
  //   setSelectedImage(images[randomIndex])
  // }, [])

  // 캐러셀 버튼
  // 현재 캐로셀의 인덱스 상태
  const [currentIndex, setCurrentIndex] = useState(0)

  // 이전 버튼 클릭 핸들러
  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // 다음 버튼 클릭 핸들러
  const handleNextClick = () => {
    if (currentIndex < countries.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // 학습 진행률
  // 예시로 60% 입력
  const [currentProgress, setCurrentProgress] = useState(
    dataMap[countries[0]].progress
  )

  // 캐로셀 인덱스 변경 시 해당 국가의 진행률을 업데이트합니다.
  useEffect(() => {
    setCurrentProgress(dataMap[countries[currentIndex]].progress)
  }, [currentIndex])

  // 전체 문항수, 맞은 문항수
  // 예시
  const [total, setTotal] = useState(dataMap[countries[0]].total)
  const [correct, setCorrect] = useState(dataMap[countries[0]].correct)
  useEffect(() => {
    const currentCountry = countries[currentIndex]
    const countryData = dataMap[currentCountry]
    setTotal(countryData.total)
    setCorrect(countryData.correct)
  }, [currentIndex])

  //  추가등록 모달
  const [open, setOpen] = useState(false)
  // const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 40,
    borderRadius: '8px',
  }

  return (
    <div className={styles.container}>
      {/* 프로필 */}
      <div className={styles.profile}>
        {/* 프로필 사진 */}
        <div className={styles.profileimage}>
          <img src={selectedImage} alt={gender} style={{ height: '110px' }} />
        </div>

        {/* 자녀 이름 */}
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={childId.toString()} // Recoil state를 string으로 변환하여 사용
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              disableUnderline
              IconComponent={ExpandMoreRoundedIcon}
              sx={{
                '.MuiSelect-select': {
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#585865',
                },
                '.MuiSvgIcon-root': {
                  fontSize: '45px',
                  paddingBottom: '5px',
                },
              }}
            >
              {ChildList.map((child: any) => (
                <MenuItem key={child.id} value={child.id.toString()}>
                  {child.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* 아이 추가등록 */}
        <div className={styles.registermore}>
          <Button color="primary" onClick={() => setOpen(true)}>
            아이 추가등록
          </Button>
        </div>
      </div>

      {/* 아이 추가등록 모달 */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-add-modal-title"
        aria-describedby="child-add-modal-description"
      >
        <Box sx={style}>
          <ChildAdd handleClose={handleClose} />
        </Box>
      </Modal>

      {/* 메인1 */}
      <div className={styles.materialContainer}>
        {/* 카로셀 버튼 + 나라 */}
        <div className={styles.carouselcontrols}>
          <IconButton
            aria-label="previous"
            onClick={handlePreviousClick}
            disabled={currentIndex === 0}
          >
            <ArrowBackIosRoundedIcon />
          </IconButton>
          <div className={styles.countrytext}>
            {countryNames[countries[currentIndex]]}
          </div>
          <IconButton
            aria-label="next"
            onClick={handleNextClick}
            disabled={currentIndex === countries.length - 1}
          >
            <ArrowForwardIosRoundedIcon />
          </IconButton>
        </div>

        {/* 진행률 차트 */}
        <div>
          <Doughnut
            data={dataMap[countries[currentIndex]]}
            options={{ responsive: false }}
            style={{ position: 'relative', height: '200px' }}
          />
        </div>

        {/* 학습 진행률 */}
        <div className={styles.progresslayout}>
          <div className={styles.title1}>학습진행률</div>
          <div className={styles.subtitle1}>{currentProgress}%</div>
        </div>

        {/* 문항수 */}
        <div className={styles.correctlayout}>
          {/* 전체 문항수 */}
          <div className={styles.title2}>전체 문항수</div>
          <div className={styles.subtitle2}>{total}</div>
          <div className={styles.subtitle4}>개</div>
          {/* 맞은 문항수 */}
          <div className={styles.title3}>맞은 문항수</div>
          <div className={styles.subtitle3}>{correct}</div>
          <div className={styles.subtitle5}>개</div>
        </div>
      </div>

      {/* main2 */}
      <div className={styles.materialContainer2}>
        {/* title */}
        <div className={styles.secondtitle}>현재 보유 외화 포인트</div>
        {/* 나라 */}
        <div className={styles.countrylayout}>
          {/* 미국 */}
          <div className={styles.eachcountry}>
            <div className={styles.countryname}>미국달러</div>
            <div className={styles.countryInfo}>
              <div className={styles.countrynum}>8.00</div>
              <div className={styles.countrymoney}>달러</div>
            </div>
          </div>
          {/* 일본 */}
          <div className={styles.eachcountry}>
            <div className={styles.countryname}>일본엔</div>
            <div className={styles.countryInfo}>
              <div className={styles.countrynum}>14.35</div>
              <div className={styles.countrymoney}>엔</div>
            </div>
          </div>
          {/* 유럽 */}
          <div className={styles.eachcountry}>
            <div className={styles.countryname}>유럽유로</div>
            <div className={styles.countryInfo}>
              <div className={styles.countrynum}>0.00</div>
              <div className={styles.countrymoney}>유로</div>
            </div>
          </div>
          {/* 중국 */}
          <div className={styles.eachcountry}>
            <div className={styles.countryname}>중국위안</div>
            <div className={styles.countryInfo}>
              <div className={styles.countrynum}>0.00</div>
              <div className={styles.countrymoney}>위엔</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Childstatus
