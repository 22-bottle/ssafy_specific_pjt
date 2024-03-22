import axios from 'axios'

const api = {
  join: 'http://localhost:8080/member/join',
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

export { join }
