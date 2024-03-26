import React, { useEffect, useState } from 'react'
import ChildStatus from './ChildStatus'
import NoChild from './NoChild'
import { useRecoilValue } from 'recoil'
import { childrenListState } from '@/state/Parentselectors'

const MainParent: React.FC = () => {
  // childrenlist 상태 초기화
  const ChildrenList = useRecoilValue(childrenListState)

  return <div>{ChildrenList.length === 0 ? <NoChild /> : <ChildStatus />}</div>
}

export default MainParent
