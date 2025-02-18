import { useState, useEffect } from 'react';

function UseEffect3() {
const [time, setTime] = useState('')

useEffect (()=> {
    const date = new Date()
    const fullTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    const interval = setInterval(()=> {
        setTime(fullTime)
    }, 1000)

    return ()=> clearInterval(interval)
}, [time])
    return (
        <div>
            <p>Таймер с использованием useState и useEffect: Создайте компонент, который
                отображает текущее время и обновляет его каждую секунду.</p>
                <p>{time}</p>
        </div>
    )
}

export default UseEffect3