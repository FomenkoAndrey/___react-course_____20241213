import { FC } from 'react'

interface CounterProps {
  count: number
}

const Counter: FC<CounterProps> = ({ count }) => {
  return (
    <h1>Counter: {count}</h1>
  )
}

export default Counter
