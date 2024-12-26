import {useState} from 'react'

function UseState7 (){
    const [counter, setCounter] = useState(0)
    
    function add () {
        setCounter(counter + 1)
    }
    return (
        <div>
            <p>Создайте компонент с кнопкой и параграфом для отображения результата счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы приклике на кнопку автоматически прибавлялась +1 к стейту счетчика</p>
            <button onClick={add}>click +1</button>
            <p>{counter}</p>
        </div>
    )
}

export default UseState7