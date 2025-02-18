import { useState, useEffect } from 'react';
import axios from 'axios';


function UseEffect5() {
    const [id, setId] = useState('')

    async function getData() {
        const randomNum = Math.round(Math.random() * 100)
        const info = await axios.get(`http://numbersapi.com/${randomNum}`)
        setId(info.data)
        console.log(info.data);

    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <p>Факты с использованием useState и useEffect: http ://numbersapi.com/: id. Создайте компонент React, который при первичном рендеринге отправляет запрос к APIс рандомно сгенерированным числом и отображает результат в консоль.</p>
            <p>{id}</p>

        </div>
    )
}

export default UseEffect5