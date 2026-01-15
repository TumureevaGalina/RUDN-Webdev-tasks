import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState<string[]>([])
  const [newTodo, setNewTodo] = useState('')
  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodoList([...todoList, newTodo])
      setNewTodo('')
    }
  }

  const handleClearSearch = () => {
    setSearchText('')
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  const filteredTodoList = todoList.filter((todo) => {
    return todo.includes(searchText)
  })

  return (
    <div className="app">
      <h1>Список дел</h1>
      
      <div className="addTodoSection">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Введите новое дело"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddTodo()
            }
          }}
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>

      <div className="searchSection">
        <input
          ref={searchInputRef}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Поиск по списку"
        />
        <button onClick={handleClearSearch}>Очистить</button>
      </div>

      <div className="todoList">
        {filteredTodoList.length === 0 ? (
          <p>Нет дел</p>
        ) : (
          filteredTodoList.map((todo, index) => (
            <div key={index} className="todoItem">
              {todo}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
