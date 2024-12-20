import ParentComponent from './components/ParentComponent.tsx'
import ChildComponent from './components/ChildComponent.tsx'

const App = () => {
  return (
    <div>
      <ParentComponent color="green">
        <h2>Passed From AppComponent as children into ParentComponent</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet ea ex laudantium nam neque porro possimus praesentium quasi tempore! A alias culpa dolorum enim magnam magni natus obcaecati recusandae!</p>

        <ChildComponent color="blue">
          <h3>Passed From ParentComponent as children into ChildComponent</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi assumenda eos facere facilis inventore minus molestias nisi nostrum obcaecati, odit placeat possimus qui quod quos ratione rem sequi tempora.</p>
        </ChildComponent>
      </ParentComponent>
    </div>
  )
}

export default App
