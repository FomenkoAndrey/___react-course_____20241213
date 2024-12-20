import { useEffect, useState } from 'react'

let timerId: any

const TestComponent = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    timerId = setInterval(() => {
      console.log('Interval', count)
    }, 1000)
    if (count === 0) {
      console.log('Component mounted') // ! []
    }
    if (count > 0) {
      console.log(`Component updated ${count}`) // ! [count]
    }
    return () => {
      console.log('Component unmounted')
      clearInterval(timerId)
    }
  }, [count])

  return (
    <div>
      <h1>Test Component {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default TestComponent
