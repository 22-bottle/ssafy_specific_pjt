import axios, { AxiosError } from 'axios'
import { http } from '@/axios'

const api = {
  code: '/parent/main/code',
  getChild: '/parent/main',
  //자녀 학습 현황
  study: `/parent/main`,
  // 자녀 보유 포인트 현황
  point: `/parent/main/point`,
  // 부모 계좌, 송금 내역
  getAccount: '/parent/wallet',
  // 아이의 환전 요청 리스트
  getTrans: '/parent/wallet/tran',
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
async function point(id: number) {
  return await http.get(`${api.point}/${id}`)
}
async function getAccount() {
  return await http.get(api.getAccount)
}
async function getTrans() {
  return await http.get(api.getTrans)
}
export { code, getChild, study, point, getAccount, getTrans }
