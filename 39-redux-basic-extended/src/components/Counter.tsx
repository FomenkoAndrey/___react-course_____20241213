import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const count = useSelector((state: { counter: number }) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
export default Counter
