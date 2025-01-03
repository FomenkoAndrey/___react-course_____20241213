import { useContext } from 'react'
import { FirstContext, SecondContext } from '../App.tsx'

const Level3 = () => {
  const { value } = useContext(FirstContext)
  const { secondValue, setSecondValue } = useContext(SecondContext)

  const handleClick = () => {
    setSecondValue('Second Value Modified when button clicked')
  }

  return (
    <div>
      <h2>Level 3: {value}</h2>
      <h2>Received from SecondContext: {secondValue}</h2>
      <button onClick={handleClick}>Change secondValue</button>
    </div>
  )
}

export default Level3
