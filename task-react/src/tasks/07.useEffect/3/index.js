import { useState, useEffect } from 'react';
import axios from 'axios';

function UseEffect3() {
    const [info, setInfo] = useState({})

    async function show() {
        const data = await axios.get('https://api.ipify.org/?format=json')
        setInfo(data.data)
    }
    useEffect(() => {
        show()
    }, [info])
    
    return (
        <div>
            <p>Запрос к API с использованием useState и useEffect: Создайте компонент, который
                выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
                данные в заголовок.</p>
            <h1>{info.ip}</h1>
        </div>
    )
}

export default UseEffect3