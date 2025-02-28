import { useReducer } from 'react'

function documentation(text, action) {
    switch (action) {
        case ('включить'):
            return 'on';
        case ('выключить'):
            return 'off';
        default:
            return;
    }
}

function UseReducer2() {
    const [text, setText] = useReducer(documentation, 'on')

    function changeText() {
        text === 'on' ? setText('выключить') : setText('включить')

    }
    return (
        <div>
            <p>Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off». Поклику на кнопку текст меняется на противоположный</p>
            <h1>{text}</h1>
            <button onClick={changeText}>Click</button>
        </div>
    )
}

export default UseReducer2