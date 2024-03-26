import axios, { AxiosError } from 'axios'
import { http } from '@/axios'

const api = {
  code: '/parent/main/code',
  getChild: '/parent/main',
  //자녀 학습 현황
  study: `/parent/main`,
}

async function code() {
  // http는 '@/axios.ts'에 작성된 자동 헤더 생성 전송 함수
  return await http.get(api.code)
}
async function getChild() {
  return await http.get(api.getChild)
}
async function study(id: number) {
  return await http.get(`${api.study}/${id}`)
}
export { code, getChild, study }
