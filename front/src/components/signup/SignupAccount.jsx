import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const Signupaccount= () => {
    const styleObj = {
        border: '1px solid black', 
        padding: '10px', 
        margin: '10px' 
    }
    const navigate = useNavigate();
    const [bank, setBank] = useState("");
    const [name, setName] = useState("");
    const [account, setAccount] = useState("");

    const handleButtonClick = () => {
        navigate('/mainparent');
        // 아이인지 부모인지 판별해서 메인페이지로 보내기
    };
    const bankChange = (event) => {
        setBank(event.target.value);
    }
    const nameChange = (event) => {
        setName(event.target.value);
    }
    const accountChange = (event) => {
        setAccount(event.target.value);
    }
    return (
    <div className="signup-account-container" style={styleObj}>
      <div className="world-illustration" style={styleObj}>
       <p>계좌등록</p>
      </div>
      <div className="account-setup-box" style={styleObj}>
        
          <label htmlFor="bank-select">은행</label>
          <select id="bank-select" value={bank} onChange={bankChange}>
            <option value="">은행 선택</option>
            {/* Populate with actual bank options */}
            <option value="bank1">Bank 1</option>
            <option value="bank2">Bank 2</option>
            {/* ... other bank options ... */}
          </select>

          <label htmlFor="name-input">이름</label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={nameChange}
            placeholder="이채은"
          />

          <label htmlFor="account-number-input">계좌번호</label>
          <input
            id="account-number-input"
            type="text"
            value={account}
            onChange={accountChange}
            placeholder="계좌번호"
          />

          <button onClick={handleButtonClick}>완료</button>
      
      </div>
    </div>
    );
};

export default Signupaccount;