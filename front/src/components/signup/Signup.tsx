import React from "react";
import { useNavigate } from 'react-router-dom'; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const Signup:React.FC= () => {

  const navigate = useNavigate();

  // 계좌 등록 화면으로 이동해야 한다. 경로 변경 필요!
  const completeClick = () => {
    navigate('/mainparent/childstatus');
  };

  const divBorder = {
    border: "1px solid black",       
    margin: "10px"
  };
    
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="female"
      >
        <FormControlLabel value="female" control={<Radio />} label="아이" />
        <FormControlLabel value="male" control={<Radio />} label="엄마" />
      </RadioGroup>
    </FormControl>
    // <div style={ divBorder }>
    //   <div style={ divBorder }>
    //     <h1>회원가입<button>닫기</button></h1>
    //   </div>
      
    //   {/* 아이 또는 부모 선택 */}
    //   <div style={ divBorder }>
    //     <label>
    //       <input type="checkbox" name="" id="" />
    //       아이
    //     </label>
    //     <label>
    //       <input type="checkbox" name="" id="" />
    //       부모
    //     </label>       
    //   </div>

    //   {/* 부모 초대코드 입력 */}
    //   <div style={ divBorder }>
    //     <input 
    //       type="text"
    //       placeholder="초대코드를 입력해주세요." />
    //   </div>

    //   {/* 성별 선택 */}
    //   <div style={ divBorder }>
    //     <select>
    //       <option disabled selected>여성</option>
    //       <option value="male">남성</option>
    //     </select>
    //   </div>

    //   {/* 생년월일 선택 */}
    //   <div style={ divBorder }>
    //     <select>
    //       <option value="year">출생 연도</option>
    //     </select>
    //     <select>
    //       <option value="month">월</option>
    //     </select>
    //     <select>
    //       <option value="day">일</option>
    //     </select>
    //   </div>

    //   {/* 이름 입력 */}
    //   <div style={ divBorder }>
    //     <input 
    //       type="text"
    //       placeholder="이름" />
    //   </div>

    //   {/* 이메일 입력 */}
    //   <div style={ divBorder }>
    //     <input 
    //       type="text"
    //       placeholder="이메일" />
    //   </div>

    //   {/* 비밀번호 입력 */}
    //   <div style={ divBorder }>
    //     <input 
    //       type="text"
    //       placeholder="비밀번호" />
    //   </div>

    //   {/* 비밀번호 확인 */}
    //   <div style={ divBorder }>
    //     <input 
    //       type="text"
    //       placeholder="비밀번호 확인" />
    //   </div>

    //   {/* 회원가입 완료 버튼 */}
    //   <div style={ divBorder }>
    //     <button onClick={ completeClick }>완료</button>
    //   </div>


      

    // </div>
  );
};

export default Signup;