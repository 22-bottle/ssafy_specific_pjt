import React, { useState } from "react";
import styles from './childstatus.module.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; 

const Childstatus:React.FC= () => {

  const [selectedChild, setSelectedChild] = useState("");
  const styleObj = {
    border: '1px solid black', 
    padding: '10px', 
    margin: '10px' 
  }
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/mainparent/childadd');
    };
  // 아이 선택시 라벨 변경 
  const handleChildSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChild(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
      </div>
      <div className={styles.materialContainer}>

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