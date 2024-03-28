import { selector } from 'recoil'
import { accountState } from './AccountAtoms'
import { getAccount } from '@/api/parent'

// 계좌 정보를 선택하는 Selector
export const accountSelector = selector({
  key: 'accountSelector', // 고유 식별자
  get: async ({ get }) => {
    try {
      const account = get(accountState)

      const response = await getAccount()
      const { accountNo, balance, frTranList } = response.data.data
      return { account, accountNo, balance, frTranList } // 계좌 정보 반환
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error)
      throw error
    }
  },
})
