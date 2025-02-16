import {useState} from 'react';

function UseState12() {
    const [flag, setFlag] = useState(false)

    return (
        <div>
            <p>Отображение текста с использованием useState: Создайте компонент, который
                предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
                отображается текст, а при нажатии на "Скрыть" текст скрывается.</p>
                <button onClick={()=> setFlag(true)}>Показать</button>
                <button onClick={()=> setFlag(false)}>Скрыть</button>
                {flag ? <p>Какой-то текст</p> : null}
        </div>
    )
}

export default UseState12