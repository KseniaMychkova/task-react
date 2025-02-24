import {useContext} from 'react'
import { Task3 } from "../../../Context";

function UseContext3() {
    const weather = useContext(Task3)
    return (
        <div>
            <p>
                Разработайте приложение для отображения текущей погоды. Используйте useContext, чтобы хранить информацию о погоде (температура, влажность, скорость ветра ит. д.). В компоненте отобразите эту информациюопогоде.
            </p>
            <div>
                <p>Температура: {weather.temp}</p>
                <p>Влажность: {weather.wet}</p>
                <p>Скорость ветра: {weather.wind}</p>
            </div>
        </div>
    )
}

export default UseContext3