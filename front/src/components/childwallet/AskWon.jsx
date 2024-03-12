import React from "react";
import { useNavigate } from 'react-router-dom';

const Askwon= () => {

    const navigate = useNavigate();

    const completeClick = () => {
        navigate('/childwallet/askcomplete');
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
                10유로 (14,457.5원)<br />
                환전을 요청할까요?</p>
            </div>
            <div style={ divBorder }>
                <p>환전 금액을 다시 한 번 확인해주세요!</p>
            </div>
            <div style={ divBorder }>
                <button onClick={ completeClick }>환전 요청하기</button>
            </div>
            
        </div>
    );
};

export default Askwon;