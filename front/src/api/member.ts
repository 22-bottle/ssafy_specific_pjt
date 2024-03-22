import axios from 'axios'

const api = {
  join: 'http://localhost:8080/member/join',
  login: 'http://localhost:8080/member/login',
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
export { join, login }
