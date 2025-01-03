import Level3 from './Level3.tsx'
import { useContext } from 'react'
import { FirstContext } from '../App.tsx'

const Level2 = () => {
  const { value } = useContext(FirstContext)
  return (
    <div>
      <h2>Level 2: {value}</h2>
      <Level3 />
    </div>
  )
}

export default Level2
