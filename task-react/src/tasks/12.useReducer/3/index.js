import { useReducer } from 'react'

function documentation(inp, action) {
    switch (action.action) {
        case ('сохранить инпут'):
            return action.valueInp;
        default:
            return;
    }
}

function UseReducer3() {
    const [inp, setInp] = useReducer(documentation, '')

    return (
        <div>
            <p>Создайте компонент отслеживающий вводимое значение в input. Результат отображать в h1</p>
            <input onChange={(e) => setInp({ action: 'сохранить инпут', valueInp: e.target.value })}></input>
            <h1>{inp}</h1>
        </div>
    )
}

export default UseReducer3