import { useRef } from 'react'

function UseRef4() {
    const tag = useRef()

    function changeBackground() {
        tag.current.style = `background-color: red`
    }
    function back() {
        tag.current.style = `background-color: white`
    }
    return (
        <div>
            <p>Создайте компонент, который при фокусе на текстовом поле добавляет background(onFocus, onBlur)</p>
            <input ref={tag} onFocus={changeBackground} onBlur={back}></input>

        </div>
    )
}

export default UseRef4
