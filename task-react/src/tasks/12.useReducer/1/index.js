import { useReducer } from 'react'

function documentation(count, action) {
    switch (action) {
        case 'increment':
            return count + 1;
        case 'decrement':
            return count - 1;
        case 'reset':
            return 0;
        default:
            return;
    }
}

function UseReducer1() {

    const [count, setCount] = useReducer(documentation, 0)
    function increment() {
        setCount('increment')
    }
    function decrement() {
        setCount('decrement')
    }
    function reset() {
        setCount('reset')
    }
    return (
        <div>
            <p>Создайте компонент счетчика, который может увеличивать, уменьшать, сбрасывать значение принажатии насоответствующиекнопки.</p>
            <h1>{count}</h1>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
        </div>
    )
}

export default UseReducer1