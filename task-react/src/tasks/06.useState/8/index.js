import {useState} from 'react'

function UseState8 (){
    const [counter, setCounter] = useState(0)
    
    function add () {
        setCounter(counter + 1)
    }
    function deduct () {
        setCounter(counter - 1)
    }

    return (
        <div>
            <p>Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом для отображения результата счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к стейту счетчика, а при клике на кнопку-1, происходило вычитаниезначения1</p>
            <button onClick={add}>click +1</button>
            <button onClick={deduct}>click -1</button>
            <p>{counter}</p>
        </div>
    )
}

export default UseState8