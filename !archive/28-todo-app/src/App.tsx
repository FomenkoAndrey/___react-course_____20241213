import Form from './components/Form.tsx'
import Todos from './components/Todos.tsx'
import Actions from './components/Actions.tsx'
import Provider from './components/Provider.tsx'

const App = () => {
  return (
    <Provider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <Actions />
        <Todos />
      </div>
    </Provider>
  )
}

export default App
