import React from "react";
import { useNavigate } from 'react-router-dom'; 

const Sendingcomplete= () => {
    const styleObj = {
        border: '1px solid black', 
        padding: '10px', 
        margin: '10px' 
    }
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/parentwallet');
    };
    return (
        <div className="sending-complete-container" style={styleObj}>
        <div className="sending-complete-card" style={styleObj}>
            <div className="sending-complete-header" style={styleObj}>
                 {/* Toss logo */}
                <img src="/path/to/logo.png" alt="Toss Logo" className="toss-logo"/>
            </div>
            <div className="sending-complete-content" style={styleObj}>
                <div className="checkmark-icon" style={styleObj}>
                    {/* 송금 완료 체크 아이콘 */}
                </div>
                <div className="confirmation-message" style={styleObj}>
                    <p>이승재님에게</p><br/>
                    <p>3,000원을 보냈습니다!</p>
                </div>
                <div className="sub-message" style={styleObj}>
                    수수료는 토스가 냈어요!
                </div>
            </div>
            <div className="sending-complete-footer" style={styleObj}>
                <button className="confirm-button" onClick={handleButtonClick}>확인</button>
            </div>
        </div>
    </div>
    );
};

export default Sendingcomplete;