import {useContext} from 'react'
import { Task1 } from '../../../Context'

function UseContext1() {
const dataValue = useContext(Task1)

    return (
        <div>
            <p>Используйте useContext, чтобы сохранять данные о текущем пользователе. Отобразите эту информациювкомпоненте,используяконтекст.</p>
            <p>{dataValue.name}</p>

    
        </div>
    )
}

export default UseContext1
