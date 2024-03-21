import React from "react";


const Myaccount:React.FC= () => {

    const divBorder = {
        border: "1px solid black",       
        margin: "10px"
    }

    
    return (
        <div style={ divBorder }>
            <h2>마이 지갑</h2>
            <div style={ divBorder }>
                <p>아이콘</p>
                <p>토스뱅크 01234567890</p>
                <h3>12,236원</h3>
            </div>
            <div style={ divBorder }>
                <div style={ divBorder }>
                    {/* 내역별 보기 버튼을 누르면 요청별, 완료별로 구분해서 보여지나..? */}
                    <h4>전체<button>내역별 보기</button></h4>
                </div>
                <div style={ divBorder }>
                    <p>2024년 3월 11일</p>
                    <p>환전 요청 5,220원<br />
                    이채은님 5유로</p>
                </div>
                <div style={ divBorder }>
                    <p>2024년 3월 08일</p>
                    <p>환전 완료 3,250원<br />
                    이채은님 3,950원</p>
                    <p>환전 요청 3,250원<br />
                    이채은님 3.5달러</p>
                </div>
            </div>
        </div>
    );
};

export default Myaccount;