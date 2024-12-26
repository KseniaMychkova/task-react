import {useState} from 'react'

function UseState4 () {
    const [inp1, setInp1] = useState('')
    const [inp2, setInp2] = useState('')

    function saveInput1 (e) {
        setInp1(e.target.value)
    }
    function saveInput2 (e) {
        setInp2(e.target.value)
    }
    function test () {
        if (inp1 === inp2) console.log('равны');
        else console.log('не равны');               
    }

    return(
        <div>
            <p>Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать данные из двух input (2 разных state). Сравнить значения 2 input на равенство. Результат отображать в консоль</p>
            <input type='text' onChange={saveInput1}></input>
            <input type='text' onChange={saveInput2}></input>
            <button onClick={test}>click</button>
        </div>
    )
}

export default UseState4