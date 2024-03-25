import axios, { AxiosError } from 'axios'

const api = {
  code: 'http://localhost:8080/parent/main/code',
  getChild: 'http://localhost:8080/parent/main',
}

async function code() {
  const accessToken = localStorage.getItem('accessToken')
  //   console.log(accessToken)
  return await axios.get(api.code, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}
export { code }
