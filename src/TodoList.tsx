import { useState, useRef } from 'react'
import './TodoList.css'

function TodoList() {
  const [todoItems, setTodoItems] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodoItems([...todoItems, inputValue])
      setInputValue('')
    }
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleClearSearch = () => {
    setSearchValue('')
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  const filteredItems = todoItems.filter((item) => {
    return item.includes(searchValue)
  })

  return (
    <div className="todoListContainer">
      <h2>Список дел</h2>
      
      <div className="addSection">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Добавить новое дело"
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
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
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Поиск по списку"
        />
        <button onClick={handleClearSearch}>Очистить</button>
      </div>

      <div className="itemsList">
        {filteredItems.length === 0 ? (
          <p>Нет дел</p>
        ) : (
          filteredItems.map((item, index) => (
            <div key={index} className="todoItem">
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList
