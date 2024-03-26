import { selector } from 'recoil'
import { getChild, study } from '@/api/parent'
import { childIdState } from '@/state/Parentatoms'

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

export const getChildStudyList = selector({
  key: 'getChildStudyList',
  get: async ({ get }) => {
    const childId = get(childIdState)
    const response = await study(childId)
    return response.data
  },
})
