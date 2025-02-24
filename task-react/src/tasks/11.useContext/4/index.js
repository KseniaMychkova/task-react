import {useContext} from 'react'
import { Task4 } from "../../../Context"

function UseContext4() {
    const themeObj = useContext(Task4)
    function changeTheme() {
        if (themeObj.theme === 'light') {
            themeObj.changeColor('dark')
        }
        else
        themeObj.changeColor('light')
    }
    return (
        <div style = { themeObj.theme === 'light' ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'black', color: 'white'}}>
            <p>Разработайте простое приложение для переключения между светлой и темной темами. Используйте useContext, чтобы хранить информацию о текущей теме (светлая или темная). В компоненте отобразите интерфейс, который позволяет пользователю переключатьсямеждутемами.</p>
            <h1>Какое-то название</h1>
            <p>Какой-то текст</p>
            <button onClick={changeTheme}>Переключить тему</button>
        </div>
    )
}

export default UseContext4