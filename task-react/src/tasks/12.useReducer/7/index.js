import { useReducer } from 'react'

function reducer(inp, param) {
    switch (param.action) {
        case 'saveInpValue':
            return param.value;
        default:
            return;
    }
}

function UseReducer6() {
    const [inp, setInp] = useReducer(reducer, '')

    function checkToPalindrom() {

        inp === inp.split('').reverse().join('') ? console.log(true) : console.log(false);
    }

    return (
        <div>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
                данные из input и проверить вводимую строку на палиндром. Результат
                отображать в консоль</p>
            <input onChange={(e) => setInp({ action: 'saveInpValue', value: e.target.value })}></input>
            <button onClick={checkToPalindrom}>Click</button>
        </div>
    )
}

export default UseReducer6