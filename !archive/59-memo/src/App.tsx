import { memo, useState } from 'react'
import NonMemoComponent from './components/NonMemoComponent.tsx'

const MemoizedComponent = memo(NonMemoComponent)

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <div>
      <input type="text" value={text} onChange={(e: any) => setText(e.target.value)} />
      {/*<NonMemoComponent count={count} />*/}
      <MemoizedComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  )
}

export default App
