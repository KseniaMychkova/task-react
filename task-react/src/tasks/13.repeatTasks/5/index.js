import { useContext, useState } from 'react'
import { RepeatTasks_Task5 } from '../../../Context/'

function RepeatTasks5() {
    const lang = useContext(RepeatTasks_Task5)
    const dict = { ru: 'Привет', en: 'Hello' }
    const [flag, setFlg] = useState(true)

    return (
        <div>
            <p>Создайте React-приложение, которое будет управлять языковыми настройками (английский и русский) с использованием контекста (useContext). Ваше приложение должно содержать:
                Компонент для переключения языка (LanguageToggle).
                Компоненты, которые будут изменять свои тексты в зависимости от текущего языка.
                Контекст, который будет хранить информацию о текущем языке и функцию для переключения языка.</p>
            <p>Сейчас включен язык: {lang.language}</p>
            <h1>{flag ? dict.ru : dict.en}</h1>
            <button onClick={() => setFlg(!flag)}>Переключить ru / en</button>
        </div>
    )
}

export default RepeatTasks5