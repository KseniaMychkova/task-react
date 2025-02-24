import {useContext} from 'react'
import { Task2 } from '../../../Context'

function UseContext2 () {

const lang = useContext(Task2)
const dictionary = {ru: 'Привет', en: 'Hello', sp: 'Hola'}

return (
    <div> 
        <p>Создайте приложение, где пользователь сможет выбирать язык интерфейса (например, английский или испанский). Используйте useContext для сохранения текущего выбранного языка и перевода текста ввыбранный язык в компонентах</p>
        <p>Текущий язык: {lang.language} </p>
        <h1>{dictionary[lang.language]}</h1>
        <div onClick={(e)=> {
            lang.change(e.target.id)
        }}>
            <button id='ru'>Выбрать: ru</button>
            <button id='en'>Выбрать: en</button>
            <button id='sp'>Выбрать: sp</button>
        </div>
    </div>
)
}

export default UseContext2