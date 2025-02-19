import {useState, useMemo} from 'react'

function UseMemo4() {
    const [inp, setInp] = useState('')

    const result = useMemo(()=>{
        const str = inp.join('').reverse().split('')
        return str
    }, [inp])

    return (
        <div>
            <p>Напишите программу, которая принимает строку от пользователя и выводит ее в обратном порядке. Используй хук useState для хранения строки и хук useMemo для кэшированиярезультата.</p>
            <input onChange={(e)=>setInp(e.target.value)}></input>
            <h1>{result}</h1>
        </div>
    )
}

export default UseMemo4
