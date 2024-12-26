import { useState } from 'react'

function UseState2 (){
    const [inp, setInp] = useState('')

    function saveInput (e){
        setInp(e.target.value)
    }
    
    function check () {
        if (inp === inp.split('').reverse().join('')) console.log(inp);
        else console.log('слово не палиндром');
               
    }

    return (
        <div>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input и проверить вводимую строку на палиндром. Результат отображать в консоль</p>
            <input type='text' onChange={saveInput}></input>
            <button onClick={check}>click</button>
        </div>
    )
}

export default UseState2