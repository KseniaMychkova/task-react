import {useState} from 'react'

function UseState5 (){
    const [inp, setInp] = useState('')
    const [greeting, setgreeting] = useState('')

    function saveInput (e) {
        setInp(e.target.value)
    }
    function makeGreeting (){
        setgreeting(`${inp}, привет!`)
    }

    return (
        <div>
            <p>Создайте компонент с полем ввода имени и кнопкой "Привет".При вводе имени в поле и нажатии на кнопку, компонент должен отображать приветственное сообщение с именем,введенным пользователем</p>
            <input type='text' onChange={saveInput} placeholder='введите свое имя'></input>
            <button onClick={makeGreeting}>Привет</button>
            <p>{greeting}</p>
           
        </div>
    )
}

export default UseState5