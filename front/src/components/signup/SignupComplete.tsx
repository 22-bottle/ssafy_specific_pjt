import React from "react";
import { useNavigate } from 'react-router-dom'; 

const SignupComplete:React.FC = () => { // Component name corrected to start with an uppercase letter
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/signup/account');
    };
    const styleObj = {
        border: '1px solid black', 
        padding: '10px', 
        margin: '10px' 
    }

    return (
        <div className="signup-complete-container" style={styleObj}>
            <div className="world-illustration"style={styleObj}>
                {/* background img 넣는 위치 */}
            </div>
            <div className="confirmation-box" style={styleObj}>
                <div className="checkmark-icon" style={styleObj}>
                    {/* Icon or image of checkmark */}
                </div>
                <div className="confirmation-message"style={styleObj}>
                    <p>회원가입을 완료했어요!</p>
                    <p>이채은님, 환영합니다!</p>
                </div>
                <button className="start-button" onClick={handleButtonClick}>토스 시작하기</button>
            </div>
        </div>
    );
};

export default SignupComplete;