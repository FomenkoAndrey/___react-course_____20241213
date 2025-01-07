import { useDispatch, useSelector } from 'react-redux'
import { decrementAsync, incrementAsync } from '../redux/actions.ts'
import { selectCount } from '../redux/selectors.ts'
import { AppDispatch } from '../redux/types.ts'

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
