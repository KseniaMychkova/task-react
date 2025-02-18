import { useRef } from 'react'

function UseRef1() {
    const parag = useRef()

    function show() {
        parag.current.style='display:block'
    }

    function hide() {
        parag.current.style='display:none'
    }
    return (
        <div>
            <p>Разработайте компонент для реализации "подсказок" (tooltips). При наведении на элемент интерфейса (например, кнопку), компонент отображает подсказку с текстом. (onMouseEnter срабатывает, когда курсор мыши входит в область элемента. onMouseLeave срабатывает, когда курсор мыши покидает область элемента.)</p>
            <button onMouseEnter={show} onMouseLeave={hide}>Подсказки</button>
           <p style={{display: 'none'}} ref={parag}>продсказка какая-то</p>
        </div>
    )
}

export default UseRef1
