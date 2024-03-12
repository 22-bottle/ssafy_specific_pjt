import React, { useState } from "react";

const Request= () => {
    const styleObj = {
        border: '1px solid black', 
        padding: '10px', 
        margin: '10px' 
    }
    // 계좌번호 변수
    const accountNumber = "5809040653029952"
    // 계좌 잔액변수
    const accountBalance = "85,003,760" 
    const [transactions, setTransactions] = useState([
        { category: "전체", amount: "5,220원" },
        // ... more transactions
      ]);
    
    const [selectedCategory, setSelectedCategory] = useState("전체")
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        // Logic to filter transactions by category
      };
    return (
        <div className="request-alarm-container" style={styleObj}>
                      
      <div className="wallet-info" style={styleObj}>
      <p>마이 지갑</p>
        <div className="wallet-image" style={styleObj}>
          {/* Placeholder for wallet image */}
          <img src="/path-to-wallet-image.png" alt="Wallet" />
        </div>
        <div className="wallet-balance" style={styleObj}>

          <p>계좌번호 {accountNumber}</p>
          <h1>{accountBalance} 원</h1>
        </div>
      </div>

      <div className="transaction-filter" style={styleObj}>
        {/* 거래 내역 리스트로 불러오기 */}
        <label htmlFor="transaction-category">분류</label>
        <select
          id="transaction-category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="전체">전체</option>
          {/* Add more options for other categories */}
        </select>
      </div>

      <div className="transaction-list" style={styleObj}>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <span>{transaction.category}</span>
              <span>{transaction.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
};

export default Request;