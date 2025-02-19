import {useState, useMemo} from 'react'
import axios from 'axios'

function UseMemo5() {
    const [info, setInfo] = useState('')
   
    async function getData () {
        const data = await axios.get('https://api.ipify.org/?format=json')
        
        console.log(data.data)
        setInfo(data.data.ip) 
    }

    useMemo(()=>{
        getData()
    },[])

    return (
        <div>
            <p>Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес должен быть получен с использованием useMemo при монтировании компонента и кэширован для избегания повторных запросов к API при обновлении другихчастейкомпонента. https ://api.ipify.org/?format=json </p>
            <h1>{info}</h1>
        </div>
    )
}

export default UseMemo5
