import axios, { AxiosError } from 'axios'
import { http } from '@/axios'

const api = {
  code: '/parent/main/code',
  getChild: '/parent/main',
}

async function code() {
  // http는 '@/axios.ts'에 작성된 자동 헤더 생성 전송 함수
  return await http.get(api.code)
}
export { code }
