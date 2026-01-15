import useCounter from './useCounter'
import './Counter.css'

interface CounterProps {
  initialValue?: number
}

function Counter({ initialValue }: CounterProps) {
  const { count, increment, decrement, reset } = useCounter(initialValue)

  return (
    <div className="counterContainer">
      <h3>Счетчик</h3>
      <div className="counterValue">{count}</div>
      <div className="counterButtons">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Сбросить</button>
      </div>
    </div>
  )
}

export default Counter
