import { useState } from 'react'
import axios from 'axios'

function UseState15() {
    const [answer, setAnswer] = useState('')
    const [inp, setInp] = useState('')

    async function getAnswer() {
        const getData = await axios.get('https://yesno.wtf/api/')
        setAnswer(getData.data)
        setInp('')
    }

    return (
        <div>
            <p>Форма с отправкой запроса к API с использованием useState: Создайте компонент, которыйпредоставляет input, button.
                После ввода данных в input по нажатию кнопку необходимо отправлять асинхронный запрос к API https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
                Отобразить результат в заголовок. Таким образом у вас получается игра в предсказателя:где пользователь вводит вопрос в input, а далее получает ответ на заданный вопрос.</p>
            <input onChange={(e) => setAnswer(e.target.value)} placeholder='Введите вопрос'></input>
            <button onClick={getAnswer}>Получить ответ</button>
            <p>{answer.answer}</p>

        </div>
    )

}

export default UseState15