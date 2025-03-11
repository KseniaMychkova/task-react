import { useContext } from 'react'
import { NotificationContext } from '../../../Context'

function UseContext9() {
    const notification = useContext(NotificationContext)

    function showNotification() {
        notification.changeNotification('Простое уведомление')
    }

    function removeNotofocation() {
        notification.changeNotification('')
    }

    return (
        <div>
            <p>Сделай приложение, где по нажатию на кнопку появляется уведомление (строка текста). Контекст используется только для хранения текущего текста уведомления и функции его обновления.

                1 Создать NotificationContext с:
                - текущим текстом уведомления (string)
                - функцией setNotification(message)

                2. Создать компонент Notification, который показывает сообщение (если оно есть).

                3. Создать компонент ActionButton, при нажатии которого вызывается setNotification("Простое уведомление").

                Пример результата:
                Страница пустая → нажимаешь кнопку "Показать уведомление".
                Появляется текст: "Простое уведомление".
                Можно дополнительно добавить кнопку "Очистить уведомление"</p>
            <button onClick={showNotification}>Показать уведомление</button>
            {notification.string.length > 0 ? <div><h1>{notification.string}</h1> <button onClick={removeNotofocation}>Очистить уведомление</button></div> : null}

        </div>
    )
}

export default UseContext9