import axios, { AxiosError } from 'axios'
import { http } from '@/axios'

const api = {
  code: '/parent/main/code',
  getChild: '/parent/main',
  getAccount: '/parent/wallet',
  getTrans: '/parent/wallet/tran',
}

async function code() {
  // http는 '@/axios.ts'에 작성된 자동 헤더 생성 전송 함수
  return await http.get(api.code)
}
async function getChild() {
  return await http.get(api.getChild)
}
async function getAccount() {
  return await http.get(api.getAccount)
}
async function getTrans() {
  return await http.get(api.getTrans)
}
export { code, getChild, getAccount, getTrans }
