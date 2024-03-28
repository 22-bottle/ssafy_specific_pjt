import React from 'react'
import { progress } from '@/api/child'
const Mainchild: React.FC = () => {
  const prog = progress()
  console.log(prog)
  return <div>메인차일드</div>
}

export default Mainchild
