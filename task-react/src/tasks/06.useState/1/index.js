import { useState } from 'react'

function UseState1 () {
    const [str, setStr] = useState('')
    
    function changeState (e) {
        setStr(e.target.value)
    }

 return (
    <div>
        <p>Создайте компонент с полем ввода и параграфом. При вводе данных в input отображать вводимое значение в параграф текущей страницы</p>
        <input type='text' onChange={changeState}></input>
        <p>{str}</p>
    </div>
 )
}

export default UseState1