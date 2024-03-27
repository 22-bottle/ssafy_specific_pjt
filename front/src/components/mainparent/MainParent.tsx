import React, { useEffect, useState } from 'react'
import ChildStatus from './ChildStatus'
import NoChild from './NoChild'
import { useRecoilValue, useRecoilState } from 'recoil'
import { childrenListState } from '@/state/Parentselectors'
import { childIdState } from '@/state/Parentatoms'

const MainParent: React.FC = () => {
  const ChildrenList = useRecoilValue(childrenListState)
  const [childId, setChildId] = useRecoilState(childIdState)
  const [isChildIdSet, setIsChildIdSet] = useState(false) // childId가 설정되었는지 추적하는 상태

  useEffect(() => {
    if (ChildrenList.length > 0) {
      setChildId(ChildrenList[0].id) // 첫 번째 자녀의 ID로 childId 설정
      setIsChildIdSet(true) // childId가 설정되었다고 표시
    } else {
      setIsChildIdSet(false) // 자녀가 없으면 false로 설정
    }
  }, [ChildrenList]) // ChildrenList가 바뀔 때마다 실행

  if (!isChildIdSet) {
    // childId가 설정되지 않았다면 로딩 메시지나 컴포넌트 표시
    return <div>Loading...</div>
  }

  // childId가 설정된 후에 컴포넌트 렌더링
  return <div>{ChildrenList.length === 0 ? <NoChild /> : <ChildStatus />}</div>
}

export default MainParent
