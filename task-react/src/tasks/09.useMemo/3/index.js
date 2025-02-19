import {useState, useMemo} from 'react'

function UseMemo1() {
    const [inp, setInp] = useState('')
    const resultSum = useMemo(()=>{
        const arr = []
        for (let i = 1; i <= +inp; i++){
            arr.push(i)
        }
        let res = arr.reduce((sum, el) => sum += el, 0)
        return res
    }, [inp])

    return (
        <div>
            <p>Создайте компонент для отображения списка чисел от 1 до N, где N- число, введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить сумму списка чисел только при изменении N.</p>
            <input onChange={(e)=>setInp(e.target.value)}></input>
            <h1>{resultSum}</h1>
            
        </div>
    )
}

export default UseMemo1
