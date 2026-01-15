import { useState } from 'react'

function TodoItem({ delo, onDelete, index }: { delo: string, onDelete: (index: number) => void, index: number }) {
  const [sdelano, setSdelano] = useState(false)

  const handleSdelano = () => {
    setSdelano(!sdelano)
  }

  const handleDelete = () => {
    onDelete(index)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
      <span style={{ textDecoration: sdelano ? 'line-through' : 'none', flex: 1 }}>
        {delo}
      </span>
      <button onClick={handleSdelano}>
        {sdelano ? 'Не выполнено' : 'Выполнено'}
      </button>
      <button onClick={handleDelete}>
        Удалить
      </button>
    </div>
  )
}

export default TodoItem
