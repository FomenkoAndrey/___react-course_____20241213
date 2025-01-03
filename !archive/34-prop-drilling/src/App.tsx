import Level1 from './components/Level1.tsx'

const App = () => {
  const propValue = 'Привіт! це Prop Value from App'
  return (
    <div>
      <h1>Prop Drilling</h1>
      <Level1 value={propValue} />
    </div>
  )
}

export default App
