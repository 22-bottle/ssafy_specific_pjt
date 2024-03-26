import React, { useState, startTransition } from 'react'
import styles from './login.module.css'
import TextField from '@mui/material/TextField'
import { login, token } from '@/api/member'
import { useNavigate } from 'react-router-dom'
import axios, { AxiosError } from 'axios'

interface ErrorResponse {
  statusCode: number
  message: string
}

function Login() {
  const navigate = useNavigate()
  const [useremail, setUseremail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const signupClick = () => {
    startTransition(() => {
      navigate('/signup')
    })
  }

  const completeClick = async () => {
    try {
      const response = await login(useremail, password)
      console.log(response.data)
      if (response.data.statusCode === 200) {
        // console.log('로그인 성공', response.data.data.tokenResponse)
        console.log('로그인 성공', response.data)
        // token 저장
        window.localStorage.setItem(
          'accessToken',
          response.data.data.tokenResponse.accessToken
        )
        window.localStorage.setItem(
          'refreshToken',
          response.data.data.tokenResponse.refreshToken
        )

        // 사용자의 role에 따라 다른 페이지로 이동
        const userRole = response.data.data.role // 로그인 응답에서 role 추출
        if (userRole === 'PARENT') {
          startTransition(() => {
            navigate('/mainparent/child-status') // 경로 확인 필요!!!
          })
          if (response.data.data.account === false) {
            startTransition(() => {
              // 등록된 계좌가 없을 때 계좌 등록 페이지로 이동
              navigate('/parentaccount')
            })
          }
        } else if (userRole === 'CHILD') {
          startTransition(() => {
            navigate('/mainchild/worldmap') // 경로 확인 필요!!
          })
          if (response.data.data.account === false) {
            startTransition(() => {
              // 등록된 계좌가 없을 때 계좌 등록 페이지로 이동
              navigate('/parentaccount')
            })
          }
        }

        // 로컬 스토리지에 토큰 저장
      }
    } catch (error) {
      // 정상적인 응답이 아닌 경우
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data as ErrorResponse
        console.log('error', errorData.statusCode)
        if (errorData.statusCode === 404) {
          alert('해당 이메일로 가입한 유저가 없습니다.')
        } else if (errorData.statusCode === 409) {
          alert('비밀번호가 일치하지 않습니다.')
        } else if (errorData.statusCode === 401) {
          window.localStorage.clear()
          // 토큰 재발급 처리
          const newToken = await token()
          window.localStorage.setItem(
            'accessToken',
            newToken.data.data.accessToken
          )
          window.localStorage.setItem(
            'refreshToken',
            newToken.data.data.refreshToken
          )
        }
      } else {
        console.error(error)
        alert('정보를 다시 확인 해주세요')
      }
    }
  }
  return (
    <div className={styles.materialContainer}>
      <div className={styles.box}>
        <div className={styles.title}>로그인</div>

        {/* 이메일 */}
        <div>
          <TextField
            fullWidth
            id="username"
            label="이메일"
            type="text"
            variant="standard"
            color="primary"
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 22 } }}
            className={styles.inputmargin}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 22 } }}
            className={styles.inputinput}
          />
        </div>

        {/* 로그인 완료 버튼 */}
        <div
          onClick={completeClick}
          className={`${styles.button} ${styles.login}`}
        >
          <button type="submit">
            <span>로그인</span>
          </button>
        </div>

        <a href="#" className={styles.passforgot}>
          비밀번호를 잊으셨나요?
        </a>
      </div>

      {/* 회원가입 버튼 */}
      <div
        onClick={signupClick}
        className={`${styles.materialbutton} ${styles.alt2}`}
      >
        <span className={styles.shape}></span>
        <span className={styles.textshape}>회원가입</span>
      </div>
    </div>
  )
}

export default Login
