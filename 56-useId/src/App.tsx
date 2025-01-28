import PasswordField from './components/PasswordField.tsx'
import { useId } from 'react'

const App = () => {

  const testId = useId()
  console.log(testId)

  return (
    <div>
      <PasswordField />
    </div>
  )
}

export default App
