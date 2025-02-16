import { useState, useEffect } from 'react';

function UseEffect2() {
    const [count, setCount] = useState(0)
    
    useEffect(() =>{
            const interval = setInterval(()=>{
            setCount( count + 1)
        }, 1000)
        return ()=> clearInterval(interval)
    })

    return (
        <div>
            <p>Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
                который увеличивает значение счетчика на 1 каждую секунду с использованием
                useEffect.</p>
            <p>{count}</p>

        </div>
    )
}

export default UseEffect2