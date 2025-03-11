import { useContext } from 'react'
import {UseContext5_1} from '../../../Context'

function UseContext5 () {
    const data = useContext(UseContext5_1)

    return (
        <div>
            <p>Воспроизвести пример работы useContext</p>
            <p>{data.name}</p>
            <p>{data.id}</p>
        </div>
    )
}

export default UseContext5