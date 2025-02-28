import { useRef } from 'react'
import axios from 'axios'

function RepeatTasks2() {
    const tag = useRef()

    async function request() {
        const response = await axios.get(`http://numbersapi.com/${+tag.current.value}`)
        console.log(response.data);
        
    }

    function getID() {
        request()
    }

    return (
        <div>
            <p>useRef.По клику на кнопку получить числовое value инпута и отправить запрос к http://numbersapi.com/:id (гдеid – значениеinput). Результат отобразить вконсоль</p>
            <input ref={tag}></input>
            <button onClick={getID}>Click</button>
        </div>
    )
}

export default RepeatTasks2