import axios, { AxiosError } from 'axios'
const { REACT_APP_SERVER_URI } = process.env

const api = {
  join: `${REACT_APP_SERVER_URI}/member/join`,
  login: `${REACT_APP_SERVER_URI}/member/login`,
  token: `${REACT_APP_SERVER_URI}/member/token`,
}
function join(
  email: string,
  password: string,
  name: string,
  birthDate: string,
  gender: string,
  role: string,
  code: string
) {
  return axios.post(api.join, {
    email: email,
    password: password,
    name: name,
    birthDate: birthDate,
    gender: gender,
    role: role,
    code: code,
  })
}
function login(email: string, password: string) {
  return axios.post(api.login, {
    email: email,
    password: password,
  })
}
// 토큰 재발급 함수
function token() {
  const refrechtoken = localStorage.getItem('refreshToken')
  return axios.post(
    api.token,
    {},
    { headers: { Authorization: `Bearer ${refrechtoken}` } }
  ) // header에 refrechtoken 전송
}
export { join, login, token }
