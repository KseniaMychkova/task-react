import { useRef } from 'react'

function UseRef1() {
    const teg = useRef()

    function changeColor () {
        teg.current.style = 'color: red'
    }
    return (
        <div>
            <p>Создайте компонент, который покликунакнопкуменяет цветтекста накрасный</p>
            <h1 ref={teg}>Пpивет</h1>
            <button onClick={changeColor}>Click</button>
        </div>
    )
}

export default UseRef1
