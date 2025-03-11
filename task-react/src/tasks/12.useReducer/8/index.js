import { useReducer } from 'react'

function reducer(inp, param) {
    switch (param.action) {
        case 'saveInp':
            return param.valueInp;
        default:
            return;
    }
}

function UseReducer6() {
    const [inp, setInp] = useReducer(reducer, '')


    return (
        <div>
            <p>Создайте компонент с полем ввода и параграфом. При вводе данных в input
                отображать вводимое значение в параграф текущей страницы</p>
            <input onChange={(e) => setInp({ action: 'saveInp', valueInp: e.target.value })}></input>
            <p>{inp}</p>
        </div>
    )
}

export default UseReducer6