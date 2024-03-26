import { selector } from 'recoil'
import { getChild } from '@/api/parent'

export const childrenListState = selector({
  key: 'ChildrenListState',
  get: async () => {
    try {
      const response = await getChild()
      const childrenData = response.data.data

      return childrenData // API 호출 결과를 반환합니다.
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error)
      // 에러 핸들링이 필요한 경우 여기에 구현합니다.
      // 예를 들어, 에러 상태를 반환하거나 기본값을 반환할 수 있습니다.
      throw error
    }
  },
})
