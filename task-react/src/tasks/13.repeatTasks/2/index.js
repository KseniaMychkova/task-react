import { useRef } from 'react'

function RepeatTasks2() {
    const teg = useRef()
    function getValue() {
        console.log(teg.current.value);

    }
    return (
        <div>
            <p>useRef.Покликунакнопкуполучитьvalue инпута</p>
            <input ref={teg}></input>
            <button onClick={getValue}>Click</button>
        </div>
    )
}

export default RepeatTasks2