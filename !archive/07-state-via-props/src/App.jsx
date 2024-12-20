import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(count + 1)

  return (
    <div>
      <Counter count={count} />
      <Button onClick={incrementCount} />
    </div>
  )
}

export default App
