import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store.ts'
import { decrementAsync, incrementAsync, selectCount } from '../redux/slices/counterSlice.ts'

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}
export default Counter
