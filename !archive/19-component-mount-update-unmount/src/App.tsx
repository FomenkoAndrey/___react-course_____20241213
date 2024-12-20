import TestComponent from './components/TestComponent.tsx'
import { useState } from 'react'

const App = () => {
  const [showComponent, setShowComponent] = useState(true)

  const toggleComponent = () => {
    setShowComponent(prevState => !prevState)
  }

  return (
    <div>
      <button onClick={toggleComponent}>{showComponent ? 'Unmount Component' : 'Mount Component'}</button>
      <div>
        {showComponent && <TestComponent />}
      </div>
    </div>
  )
}

export default App
