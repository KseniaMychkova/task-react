import { useReducer } from 'react'

function reducer(flag, action) {
    switch (action) {
        case 'show':
            return true;
        case 'hide':
            return false;
        default:
            return;
    }
}
function UseReducer6() {
    const [flag, setFlag] = useReducer(reducer, false)

    function changeStatus() {
        !flag ? setFlag('show') : setFlag('hide')
    }
    return (
        <div>
            <p>Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
                текст должен появляться или исчезать</p>
            <button onClick={changeStatus}>Показать/Скрыть</button>

            {flag ? <h1>Text</h1> : null}


        </div>
    )
}

export default UseReducer6