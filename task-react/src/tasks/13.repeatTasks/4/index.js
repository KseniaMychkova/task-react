import { useRef } from 'react'
import axios from 'axios'

function RepeatTasks4 () {
    const tag = useRef()
    const tagH1 = useRef()

    async function request() {
        const response = await axios.get(`http://numbersapi.com/${+tag.current.value}`)
        tagH1.current.textContent = response.data;
        
    }

    function getID() {
        request()
    }

    return (
        <div>
            <p>Дополнить задачу №3. Результат, полученный из http://numbersapi.com/:id отобразитьвзаголовкеспомощьюuseRef</p>
            <input ref={tag}></input>
            <button onClick={getID}>Click</button>
            <h1 ref={tagH1}></h1>
        </div>
    )
}

export default RepeatTasks4