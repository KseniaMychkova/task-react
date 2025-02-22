import {useState, useCallback} from 'react'

function UseCallback1() {
    const [count, setCount] = useState(0)
    const add = useCallback(()=>{
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <p>Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку счетчик должен увеличиваться на 1. Используйте useCallback, чтобы оптимизироватьобработчик кликанакнопке.</p>
            <button onClick={add}>+1</button>
            <h1>{count}</h1>
    
        </div>
    )
}

export default UseCallback1
