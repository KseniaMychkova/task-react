import { useRef, useEffect } from 'react'
import axios from 'axios'

function RepeatTasks1() {
    const teg = useRef()

    async function getData() {
        const response = await axios.get('https://api.ipify.org/?format=json')
        teg.current.textContent = response.data.ip
         
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <p>useRef, useEffect.По условию useRef хранит ссылку на тег h1 в html. Ваша задача при первичном рендеринге отправить запросна https://api.ipify.org/?format=json и отобразить в textContent h1 результат</p>
            <h1 ref={teg}></h1>
        </div>
    )
}

export default RepeatTasks1