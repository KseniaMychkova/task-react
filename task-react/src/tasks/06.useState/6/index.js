import {useState} from 'react'

function UseState6 () {
    const [flag, setFlag] = useState(true)
    const [show, setshow] = useState('')

    function change (){
        if(flag === true) {
            setshow('Салют!')
            setFlag(false)
        }
        else {
            setshow('')
            setFlag(true)
        }
    }

    return (
        <div>
            <p>Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку текст должен появляться или исчезать</p>
            <p>{show}</p>
            <button onClick={change}>Показать/скрыть</button>
        </div>
    )
}

export default UseState6