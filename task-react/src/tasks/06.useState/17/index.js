import {useState} from 'react'

function UseState17 () {
    const [size, setSize] = useState(16);
    function increase () {
        setSize(size + 1) 
    }
    function reduce (){
        setSize(size - 1)
    }

    return (
        <div>
            <p>Изменение размер ашрифта с использованием useState: Создайтекомпонент, которыйпредоставляет двекнопки: "Увеличить"и"Уменьшить".Принажатиина эти кнопки значениеfont-sizeизменяетсясоответствующимобразомна+/– 1px.</p>
            <button onClick={increase}>Увеличить</button>
            <button onClick={reduce}>Уменьшить</button>
            <p style={{fontSize: size}}>Какой-то абзац</p>
        </div>
    )
}

export default UseState17