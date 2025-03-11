import { useReducer } from 'react'

function reducer(counter, action) {
    switch (action) {
        case 'increment':
            return counter + 1;
        case 'decrement':
            return counter - 1;
        case 'reset':
            return 0;
        default:
            return;
    }
}

function UseReducer6() {
    const [counter, setCounter] = useReducer(reducer, 0)



    return (
        <div>
            <p>Создайте компонент счетчика, который может увеличивать, уменьшать,
                сбрасывать значение при нажатии на соответствующие кнопки.</p>
            <h1>{counter}</h1>
            <button onClick={() => { setCounter('increment') }}>+1</button>
            <button onClick={() => { setCounter('decrement') }}>-1</button>
            <button onClick={() => { setCounter('reset') }}>0</button>

        </div>
    )
}

export default UseReducer6