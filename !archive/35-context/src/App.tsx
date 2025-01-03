import Level1 from './components/Level1.tsx'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import Second from './components/Second.tsx'

export const FirstContext = createContext({
  value: ''
})

interface SecondContextType {
  secondValue: string
  setSecondValue: Dispatch<SetStateAction<string>>
}

export const SecondContext = createContext<SecondContextType>({
  secondValue: '',
  setSecondValue: (_value: string | ((prevValue: string) => string)) => {}
})

const App = () => {
  const propValue = 'Привіт! це Prop Value from App'
  const [secondValue, setSecondValue] = useState<string>('Second Value from App')

  return (
    <FirstContext.Provider value={{ value: propValue }}>
      <SecondContext.Provider value={{ secondValue, setSecondValue }}>
        <div>
          <h1>Prop Drilling</h1>
          <Level1 />
          <Second />
        </div>
      </SecondContext.Provider>
    </FirstContext.Provider>
  )
}

export default App
