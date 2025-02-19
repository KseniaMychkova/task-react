import {useState, useMemo} from 'react'

function UseMemo2() {
    const [inp, setInp] = useState('')
    const result = useMemo(()=>{
        let factorial = 1
        console.log('+')
        for(let i=1; i <= +inp; i++){
            factorial *= i
        }
        return factorial
    }, [inp])
    return (
        <div>
            <p>Разработайте компонент, который выполняет факториал числа при вводе значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты вычислений для разных введенных значений и отображать их без повторных вычислений.</p>
            <input onChange={(e)=> setInp(e.target.value)}></input>
            <h1>{result}</h1>
        </div>
    )
}

export default UseMemo2
