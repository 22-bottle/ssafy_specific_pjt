import React, { useState } from 'react';
import styles from './login.module.css';
import TextField from '@mui/material/TextField';

function Login() {
  
  // 로그인 로직
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // 로그인 처리 로직을 여기에 추가하세요.
  //   // 예: 서버에 사용자 이름과 비밀번호를 전송하고 응답을 처리합니다.
  //   console.log('로그인 시도:', username, password);
  // };

  
  return (
      <div className={ styles.materialContainer }>


        <div className={ styles.box }>

          <div className={ styles.title }>로그인</div>

          <div>
          <TextField
            fullWidth
            id="username"
            label="이메일"
            type="text"
            variant="standard"
            color="tossmain"
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{style: {fontSize: 22}}}
            className={styles.inputmargin}
        />
        </div>
        
          <div>
          <TextField
            fullWidth
            id="password"
            label="비밀번호"
            type="password"
            variant="standard"
            color="tossmain"
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{style: {fontSize: 22}}}
            className={styles.inputinput}
          />
          </div>
        

          <div className={`${styles.button} ${styles.login}`}>
              <button type="submit"><span>로그인</span></button>
          </div>

          <a href="" className={ styles.passforgot }>비밀번호를 잊으셨나요?</a>

        </div>


        <div className={`${styles.materialbutton} ${styles.alt2}`}><span className={ styles.shape }></span><span className={ styles.textshape }>회원가입</span></div>

          


      </div>
  );
}

export default Login;