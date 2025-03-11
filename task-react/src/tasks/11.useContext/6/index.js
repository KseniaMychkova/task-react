import { useContext } from 'react'
import {UseContext_ChangeTheme} from '../../../Context'

function UseContext6() {

    const themeContext = useContext(UseContext_ChangeTheme)

    function changeTheme () {
        themeContext.theme === 'light' ? themeContext.change('dark') : themeContext.change('light')
        
    }

    return (
        <div style = {{backgroundColor:  themeContext.theme === 'light' ? 'white' : 'gray', color: themeContext.theme === 'light' ? 'black' : 'white'}}>
            <p>Создай простое приложение, в котором можно переключать тему (светлая / темная). Цвет фона и текста будут меняться в зависимости от выбранной темы. Контекст будет использоваться для хранения текущей темы и функции переключения.

                Создать ThemeContext с двумя значениями:

                текущая тема (light или dark)
                функция для переключения темы</p>
                <button onClick={changeTheme}>Change theme</button>
        </div>
    )
}

export default UseContext6