import { useState } from 'react'

function UseState15() {
    const [inp, setInp] = useState('')
    const [flag, setFlag] = useState(false)
    const checkEmail = () => {
        try {
            if (!/[a-zA-Z0-9!@#$%^&*()_+-=]+@+[a-z]+.+[a-z]+/gm.test(inp)) throw new Error('Ваша почта не соответствует требованиям')
            else {
                setFlag(true)
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <p>Форма сиспользованием useState: Создайте компонент текстового поля, который позволяет пользователю вводить текст и проверять введенный текст регулярным выражением на почту по нажатию на кнопку. В заголовок отобразить true если введенная строка удовлетворяет регулярному выражению и false в противном случае.</p>
            <input value={inp} onChange={(e) => setInp(e.target.value)} placeholder='Введите почту'></input>
            <button onClick={checkEmail}>Проверить</button>
            {flag ? <h1>{inp}</h1> : null}
        </div>
    )
}

export default UseState15