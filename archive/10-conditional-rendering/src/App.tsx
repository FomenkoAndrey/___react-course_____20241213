import Counter from './components/Counter.tsx'
import Button from './components/Button.tsx'
import { FC, useState } from 'react'

const initialState = 0

const App: FC = () => {
  const [count, setCount] = useState(initialState)

  const incrementCount = () => {
    setCount((prevState => prevState + 1))
  }

  const resetCount = () => {
    setCount(initialState)
  }

  return (
    <div>
      <Counter count={count} />
      <Button onClick={incrementCount} text="Increment" />
      {!!count && <Button onClick={resetCount} text="Reset" />}
    </div>
  )
}

export default App
