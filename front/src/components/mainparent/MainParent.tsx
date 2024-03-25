import React, { useEffect, useState } from 'react'
import ChildStatus from './ChildStatus'
import NoChild from './NoChild'
import { getChild } from '@/api/parent'

const MainParent: React.FC = () => {
  // childrenlist 상태 초기화
  const [childrenList, setChildrenList] = useState([])

  useEffect(() => {
    // 비동기 함수 정의
    const fetchChildren = async () => {
      try {
        const response = await getChild()
        const childrenData = response.data.data
        console.log(childrenData)
        // API 응답으로 받은 데이터를 상태에 저장
        setChildrenList(childrenData)
      } catch (error) {
        console.error('API 요청 중 오류 발생:', error)
      }
    }

    // 비동기 함수 실행
    fetchChildren()
  }, []) // 빈 배열을 넣어서 컴포넌트 마운트 시에만 실행되도록 함

  return <div>{childrenList.length === 0 ? <NoChild /> : <ChildStatus />}</div>
}

export default MainParent
