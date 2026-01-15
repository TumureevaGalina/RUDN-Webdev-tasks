import TodoList from './TodoList'
import Counter from './Counter'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Задания</h1>
      
      <TodoList />
      
      <div className="countersSection">
        <Counter initialValue={5} />
        <Counter />
      </div>
    </div>
  )
}

export default App
