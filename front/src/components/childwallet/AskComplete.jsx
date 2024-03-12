import React from "react";
import { useNavigate } from "react-router-dom";

const Askcomplete= () => {

  const navigate = useNavigate();

    const okClick = () => {
      navigate('/childwallet/point');
    };

  const divBorder = {
    border: "1px solid black",       
    margin: "10px"
  }
    
  return (
    <div style={ divBorder }>
      <div style={ divBorder }>
          <p>아이콘</p>
      </div>
      <div style={ divBorder }>
          <p>이채은님에게 <br />
          환전을 요청했어요!</p>
      </div>
      <div style={ divBorder }>
          <p>환전이 완료되면 알려드릴게요!</p>
      </div>
      <div style={ divBorder }>
          <button onClick={ okClick }>확인</button>
      </div>
            
    </div>
  );
};

export default Askcomplete;