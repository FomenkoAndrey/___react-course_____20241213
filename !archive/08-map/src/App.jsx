import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx'
import { useState } from 'react'

const textArray = ['Increment count', 'Count + 1', 'One more']

const App = () => {
  const [count, setCount] = useState(0)

  // const incrementCount = () => setCount(count + 1)
  const incrementCount = () => setCount((prevState) => prevState + 1)

  return (
    <div>
      <Counter count={count} />

      {textArray.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />
      })}
    </div>
  )
}

export default App
