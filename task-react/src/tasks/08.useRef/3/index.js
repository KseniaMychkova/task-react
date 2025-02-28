import { useRef } from 'react'

function UseRef3() {
    const teg = useRef()
    const fontSize = useRef(15)
    
    function change (){
        fontSize.current += 1
        teg.current.style = `font-size: ${fontSize.current}px`
    }
    return (
        <div>
            <p>Создайте компонент, который при каждом клике на кнопку увеличивает размер шрифта текста в элементе на странице.</p>
            <button onClick={change}>Click</button>
            <h1 style={{fontSize: fontSize.current}} ref={teg}>Привет</h1>
        </div>
    )
}

export default UseRef3
