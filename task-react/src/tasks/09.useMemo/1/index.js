import { useState, useMemo } from 'react'

function UseMemo1() {
    const [inp1, setInp1] = useState('')
    const [inp2, setInp2] = useState('')
    let memoResult = useMemo(() => {
        return +inp1 + +inp2

    }, [inp1, inp2])


    return (
        <div>
            <p>Создайте компонент React, который отображает сумму двух чисел. Используй хук useState для хранения значений чисел и хук useMemo для кэширования результата суммы. При изменении значений чисел, сумма должна пересчитыватьсятолько тогда, когда необходимо.</p>
            <input onChange={(e) => setInp1(e.target.value)} placeholder='введите первое число'></input>
            <input onChange={(e) => setInp2(e.target.value)} placeholder='введите второе число'></input>
            <h1>{memoResult}</h1>
        </div>
    )
}

export default UseMemo1
