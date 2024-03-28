import { atom } from 'recoil'

export const accountState = atom({
  key: 'accountState', // 고유한 key
  default: {
    accountNo: '',
    balance: '',
    frTranList: [], // 거래 내역
  },
})

// export const tranState = atom({
//   key: 'tranState',
//   default: [],
// })
