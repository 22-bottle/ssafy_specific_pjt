import { selector } from 'recoil'
import { getChild } from '@/api/parent'

export const childrenListState = selector({
  key: 'ChildrenListState',
  get: async () => {
    try {
      const response = await getChild()
      const childrenData = await response.data.data
      console.log(childrenData)
      return childrenData
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error)
      throw error
    }
  },
})
