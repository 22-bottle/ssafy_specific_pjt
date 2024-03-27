import { selector } from 'recoil'
import { accountState } from './AccountAtoms'

// 계좌 정보를 선택하는 Selector
export const accountSelector = selector({
  key: 'accountSelector', // 고유 식별자
  get: ({ get }) => {
    const account = get(accountState)
    return account // 계좌 정보 반환
  },
})
