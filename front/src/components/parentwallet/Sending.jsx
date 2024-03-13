import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const Sending = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
          navigate('/parentwallet/complete');
        
      };
    const styleObj = {
        border: '1px solid black', 
        padding: '10px', 
        margin: '10px' 
    }
  const [pin, setPin] = useState(""); // State to store the pin

  const handleKeyPress = (number) => {
    if (pin.length < 4) {
      setPin(pin + number);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1)); // Remove the last digit
  };

  const keypadStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    // Other styling here...
  };

  return (
    <div style={styleObj}>
      <div style={styleObj}> 
        <p>내 아이에게 3,000원을 송금할까요?</p>
        <p>비밀번호를 입력해주세요.</p>
        <p>PIN: {pin}</p> {/* Display the entered pin here */}
      </div>
      <div className="pin-inputs" style={styleObj}>
        {/* Replace this with your actual pin inputs, or display pin */}
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index}>{pin[index] || "*"}</span> // This will display the pin or a placeholder
        ))}
      </div>
      <div className="keypad" style={keypadStyle}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'delete', 0].map((number) =>
          number === 'delete' ? (
            <button key={number} onClick={handleDelete}>←</button>
          ) : (
            <button key={number} onClick={() => handleKeyPress(number.toString())}>
              {number}
            </button>
          )
        )}
      </div>
      <button onClick={handleButtonClick}>송금하기</button>
    </div>
  );
};

export default Sending;