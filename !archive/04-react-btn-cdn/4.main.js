const App = (props) => {
  const { initialButtonText, initialClassesList } = props

  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [classesList, setClassesList] = React.useState(initialClassesList)

  const onClickHandler = () => {
    setButtonText(`React clicked! ${new Date().toLocaleTimeString()}`)
    setClassesList('btn-info')
  }

  console.log('App function is called')
  return (
    <div>
      <h1>Hello from React</h1>
      <button id="button" className={classesList} onClick={onClickHandler}>{buttonText}</button>
    </div>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me please" initialClassesList="btn-default" />)
