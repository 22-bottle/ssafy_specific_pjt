import React from "react";
import { useNavigate } from 'react-router-dom'; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';


function Signup() {

  const navigate = useNavigate();

  // 계좌 등록 화면으로 이동해야 한다. 경로 변경 필요!
  const completeClick = () => {
    navigate('/mainparent/childstatus');
  };

  const divBorder = {
    border: "1px solid black",       
    margin: "10px"
  };

  // 성별 로직
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
    
  return (
    <div>
      <div>
        <div>회원가입</div>

        {/* 부모 or 아이 */}
        <div>
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
        </div>

        {/* 성별 */}
        <div>
          <FormControl variant="standard" sx={{ my: 1, minWidth: 120 }}>
            <InputLabel id="gender" sx={{fontSize: 20}}>성별</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              value={age}
              color="primary"
              onChange={handleChange}
              sx={{fontSize: 25}}
            >
              <MenuItem value="">
              </MenuItem>
              <MenuItem value={10} sx={{fontSize: 20}}>여자</MenuItem>
              <MenuItem value={20} sx={{fontSize: 20}}>남자</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* 생년월일 */}
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField']}>
              <DateField
                format="YYYY/MM/DD"
                variant="standard"
                color="primary"
                label="생년월일"
                inputProps={{ style: { fontSize: 25 } }}
                InputLabelProps={{ style: { fontSize: 22 } }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        {/* 이름 */}
        <div>
          <TextField
            fullWidth
            id="name"
            label="이름"
            type="text"
            variant="standard"
            color="primary"
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 22 } }}
          />
        </div>

        {/* 이메일 */}
        <div>
          <TextField
            fullWidth
            id="email"
            label="이메일"
            type="text"
            variant="standard"
            color="primary"
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 22 } }}
          />
        </div>

        {/* 비밀번호 */}
        <div>
          <TextField
            fullWidth
            id="password"
            label="비밀번호"
            type="password"
            variant="standard"
            color="primary" 
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 22 } }}
          />
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <TextField
            fullWidth
            id="confirm"
            label="비밀번호"
            type="confirm"
            variant="standard"
            color="primary"
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 22 } }}
          />
        </div>

        {/* 회원가입 완료 버튼 */}
        <div>
          <button type="submit">
            <span>회원가입</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;