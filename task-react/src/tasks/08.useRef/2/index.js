import { useRef } from 'react'

function UseRef2() {
    const tag = useRef()

    function change () {
        tag.current.style = `color: #${Math.round(Math.random() * 999)}`
    }
    
    return (
        <div>
            <p>Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет текста</p>
            <h1 ref={tag}>Привет</h1>
            <button onClick={change}>Click</button>
        </div>
    )
}

export default UseRef2
