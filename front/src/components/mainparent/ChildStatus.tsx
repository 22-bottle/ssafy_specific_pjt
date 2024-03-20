import React, { useState, useEffect } from "react";
import styles from './childstatus.module.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; 
import profileBoy1 from '../../assets/profile_boy1.png';
import profileBoy2 from '../../assets/profile_boy2.png';
import profileBoy3 from '../../assets/profile_boy3.png';
import profileBoy4 from '../../assets/profile_boy4.png';
import profileGirl1 from '../../assets/profile_girl1.png';
import profileGirl2 from '../../assets/profile_girl2.png';
import profileGirl3 from '../../assets/profile_girl3.png';
import profileGirl4 from '../../assets/profile_girl4.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';


const Childstatus:React.FC= () => {

  const [selectedChild, setSelectedChild] = useState("");
  const [selectedImage, setSelectedImage] = useState('');

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/mainparent/childadd');
  };


  // 프로필 랜덤 사진
  // 예시로 'boy'로 설정. 동적으로 설정 필요.
  const gender = 'boy'; // 'boy' 또는 'girl'
  useEffect(() => {
    const boyImages = [profileBoy1, profileBoy2, profileBoy3, profileBoy4];
    const girlImages = [profileGirl1, profileGirl2, profileGirl3, profileGirl4];
    const images = gender === 'boy' ? boyImages : girlImages;
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  }, [gender]);


  // 자녀이름 select
  const [age, setAge] = useState<string>('10');
  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const boyImages = [profileBoy1, profileBoy2, profileBoy3, profileBoy4];
    const girlImages = [profileGirl1, profileGirl2, profileGirl3, profileGirl4];

    // 성별 결정 로직 추가 설정 필요
    // 예시로 '10'이면 남자 아이, '20'이면 여자 아이로 가정
    let images = age === '10' ? boyImages : girlImages; 
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  }, [age]);


  // 아이 선택시 라벨 변경 
  const handleChildSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChild(event.target.value);
  };

  
  return (
    <div className={styles.container}>

      
      {/* 프로필 */}
      <div className={styles.profile}>

        {/* 프로필 사진 */}
        <div className={styles.profileimage}>
          <img src={selectedImage} alt={gender} style={{ height: '100px' }} />
        </div>

        {/* 자녀 이름 */}
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
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
              <MenuItem value={'10'}>이승재</MenuItem>
              <MenuItem value={'20'}>이무진</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      
      {/* 메인 */}
      <div className={styles.materialContainer}>

        {/* 카로셀 버튼 + 나라 */}
        <div>p</div>

        {/* 진행률 차트 */}
        <div>p</div>

        {/* 문항수 */}
        <div>
          {/* 전체 문항수 */}
          <div>p</div>
          {/* 맞은 문항수 */}
          <div>p</div>
        </div>

        {/* title */}
        <div>p</div>

        {/* 나라 */}
        <div>
          {/* 미국 */}
          <div>p</div>
          {/* 일본 */}
          <div>p</div>
          {/* 유럽 */}
          <div>p</div>
          {/* 중국 */}
          <div>p</div>
        </div>
      </div>

      {/* comment */}
      <div>
        {/* 마이지갑 이동 */}
        <div></div>
        {/* 실시간 환율 이동 */}
        <div></div>
      </div>
    </div>
      //   <div className="child-status-container">
      //     <div className="header">
      //       <div className="logo">toss</div>
      //       {/* profile picture */}
      //     </div>
          
      //     <div className="profile-selection">
      //   <label htmlFor="child-select">{selectedChild} </label>
      //   <select id="child-select" value={selectedChild} onChange={handleChildSelect}>
      //     <option value="">아이를 선택하세요</option>
      //     <option value="이채은">이채은</option>
      //     <option value="이지은">이지은</option>
      //     {/* Add more options for each child */}
      //   </select>
      //   <button onClick={handleButtonClick}>아이추가+</button>
      // </div>
    
      //     <div className="child-process" style={styleObj}>
      //       <Carousel data-bs-theme="dark" >
      //           <Carousel.Item>
      //           <div className="summary-card" style={styleObj}>
      //           <div className="summary-header" style={styleObj}>
      //               <p>미국</p>
      //           </div>
      //            <div className="savings-goal">
      //            {/* Savings goal indicator would go here */}
      //           <div className="goal-percentage">학습 진행률 60%</div>
      //           <div className="goal-details">
      //             <span>전체 문항수: 50개</span>
      //             <br/>
      //             <span>맞은 문항수: 34개</span>
      //           </div>
      //         </div>
      //         </div>
      //         </Carousel.Item>
      //         <Carousel.Item>
      //         <div className="summary-card" style={styleObj}>
      //           <div className="summary-header" style={styleObj}>
      //               <p>이탈리아</p>
      //           </div>
      //            <div className="savings-goal">
      //            {/* Savings goal indicator would go here */}
      //           <div className="goal-percentage">학습 진행률 60%</div>
      //           <div className="goal-details">
      //             <span>전체 문항수: 50개</span>
      //             <br/>
      //             <span>맞은 문항수: 34개</span>
      //           </div>
      //         </div>
      //         </div>
      //       </Carousel.Item>
      //       <Carousel.Item>
      //       <div className="summary-card" style={styleObj}>
      //           <div className="summary-header" style={styleObj}>
      //               <p>일본</p>
      //           </div>
      //            <div className="savings-goal">
      //            {/* Savings goal indicator would go here */}
      //           <div className="goal-percentage">학습 진행률 60%</div>
      //           <div className="goal-details">
      //             <span>전체 문항수: 50개</span>
      //             <br/>
      //             <span>맞은 문항수: 34개</span>
      //           </div>
      //         </div>
      //         </div>
      //       </Carousel.Item>
      //       <Carousel.Item>
      //       <div className="summary-card" style={styleObj}>
      //           <div className="summary-header" style={styleObj}>
      //               <p>중국</p>
      //           </div>
      //            <div className="savings-goal">
      //            {/* Savings goal indicator would go here */}
      //           <div className="goal-percentage">학습 진행률 60%</div>
      //           <div className="goal-details">
      //             <span>전체 문항수: 50개</span>
      //             <br/>
      //             <span>맞은 문항수: 34개</span>
      //           </div>
      //         </div>
      //         </div>
      //       </Carousel.Item>
      //       </Carousel>
      //       </div>
            
    
      //     <div className="finance-details">
      //       <p>보유외화포인트</p>
      //       <ul>
      //         <li>미국달러: 35.5만원 / 8.0만원</li>
      //         <li>유로: 13.3만원 / 0.0만원</li>
      //         <li>일본엔: 20.5만원 / 10.3만원</li>
      //         <li>중국위안: 0.5만원 / 0.0만원</li>
      //       </ul>
      //     </div>
    
      //     <div className="footer">
      //       {/* 마이지갑 바로가기 실시간 환율 확인하기 */}
           
      //     </div>
      //   </div>
      );
};

export default Childstatus;