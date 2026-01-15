import { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList() {
  const [dela, setDela] = useState<string[]>([])
  const [tekst, setTekst] = useState('')

  const handleDobavit = () => {
    if (tekst.trim() !== '') {
      setDela([...dela, tekst])
      setTekst('')
    }
  }

  const handleDelete = (index: number) => {
    const novyeDela = dela.filter((_, i) => i !== index)
    setDela(novyeDela)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Список дел</h1>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={tekst}
          onChange={(e) => setTekst(e.target.value)}
          placeholder="Введите дело"
          style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        />
        <button onClick={handleDobavit} style={{ padding: '8px 16px', fontSize: '16px' }}>
          Добавить
        </button>
      </div>
      <div>
        {dela.length === 0 ? (
          <p>Список дел пуст</p>
        ) : (
          dela.map((delo, index) => (
            <TodoItem
              key={index}
              delo={delo}
              onDelete={handleDelete}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList
