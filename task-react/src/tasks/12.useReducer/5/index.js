import { useReducer } from 'react'

function getInputValue1(inp1, paramInp1) {
    switch (paramInp1.action) {
        case ('getInp1'):
            return paramInp1.valueInp1;
        default:
            return;
    }
}

function getInputValue2(inp2, paramInp2) {
    switch (paramInp2.action) {
        case ('getInp2'):
            return paramInp2.valueInp2;
        default:
            return;
    }
}

function UseReducer5() {
    const [inp1, setInp1] = useReducer(getInputValue1, '')
    const [inp2, setInp2] = useReducer(getInputValue2, '')


    function getSum() {
        console.log(+inp1 + +inp2)
    }

    return (
        <div>
            <p>Создайте компонент отслеживающий вводимое значение 2 input. Посчитать сумму 2 input. Поклику на кнопку отображать результат в консоль</p>
            <input onChange={(e) => setInp1({ action: 'getInp1', valueInp1: e.target.value })} placeholder='Введите первое число'></input>
            <input onChange={(e) => setInp2({ action: 'getInp2', valueInp2: e.target.value })} placeholder='Введите второе число'></input>
            <button onClick={getSum}>Click</button>
        </div>
    )
}

export default UseReducer5