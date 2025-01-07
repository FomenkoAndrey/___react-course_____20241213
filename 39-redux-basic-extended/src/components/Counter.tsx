import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions.ts'
import { RootState } from '../redux/types.ts'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
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
