import { useState } from 'react'

function UseState3 () {
    const [inp, setInp] = useState('')

    function saveInput (e){
        setInp(e.target.value)
    }

    function check (){
        try {
            if (!/^[a-z0-9!#$%^&*()_\-=+]+@[a-z]+\.[a-z]+$/gm.test(inp)) throw new Error ('Вы ввели не валидную почту')
                else console.log('success');
                
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <div>
            <p>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input и проверить вводимую строку на почту. Результат отображать в консоль</p>
            <input type='text' onChange={saveInput}></input>
            <button onClick={check}>click</button>
        </div>
    )
}

export default UseState3