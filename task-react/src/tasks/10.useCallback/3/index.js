import {useState, useCallback} from 'react'

function UseCallback3() {
const [status, setStatus] = useState('')
const [flag, setFlag] = useState(false)
const changeStatus = useCallback(()=>{
    flag ? setStatus('Активный') : setStatus('Неактивный')
    setFlag(!flag)
}, [flag])
    return (
        <div>
            <p>Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике на кнопку статус компонента должен меняться между "Активный" и "Неактивный". Используйте useCallback, чтобы оптимизировать функциюизменениястатуса.</p>
            <button onClick={changeStatus}>Click</button>
            <h1>{status}</h1>
    
        </div>
    )
}

export default UseCallback3
