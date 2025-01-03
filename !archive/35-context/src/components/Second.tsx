import { useContext, useEffect } from 'react'
import { FirstContext, SecondContext } from '../App.tsx'

const Second = () => {
  const { value } = useContext(FirstContext)
  const { secondValue, setSecondValue } = useContext(SecondContext)

  useEffect(() => {
    setSecondValue('Second Value Modified from Second Component')
  }, [setSecondValue])

  return (
    <div>
      <h1>Second Component</h1>
      <h2>Received from FirstContext: {value}</h2>
      <h2>Received from SecondContext: {secondValue}</h2>
    </div>
  )
}

export default Second
