import {useState} from 'react'

function UseState9 (){
    const [counter, setCounter] = useState(0)
    
    function add () {
        setCounter(counter + 1)
    }
    function deduct () {
        setCounter(counter - 1)
    }
    function reset () {
        setCounter(0)
    }
    return (
        <div>
            <p>Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и кнопку "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в ноль. Используйте useState, чтобы управлять значениемсчетчика.</p>
            <button onClick={add}>click +1</button>
            <button onClick={deduct}>click -1</button>
            <button onClick={reset}>click reset</button>
            <p>{counter}</p>
        </div>
        
    )
}

export default UseState9