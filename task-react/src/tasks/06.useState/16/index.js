import { useState } from 'react'


function UseState15() {
    const [inp1, setInp1] = useState('')
    const [inp2, setInp2] = useState('')
    const [symbol, setSymbol] = useState('')
    const [res, setRes] = useState()
    function result() {
        if (symbol === '+') setRes(+inp1 + +inp2)
        else if (symbol === '-') setRes(+inp1 - +inp2)
        else if (symbol === '*') setRes(+inp1 - +inp2)
        else if (symbol === '/') setRes(+inp1 - +inp2)
        setInp1('')
        setInp2('')
    }



    return (
        <div>
            <p>Создайтекомпонент простого калькулятора,который выполняеткоманды: +, -, *, /</p>
            <input value={inp1} onChange={(e) => setInp1(e.target.value)} placeholder='введите число'></input>
            <input value={inp2} onChange={(e) => setInp2(e.target.value)} placeholder='введите число'></input>
            <div onClick={(e) => setSymbol(e.target.textContent)}>
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
            </div>
            <button onClick={result}>Result</button>

            <h1>{res}</h1>
        </div>
    )
}

export default UseState15



// function UseState15() {
//     const [inp1, setInp1] = useState('')
//     const [inp2, setInp2] = useState('')
//     const [res, setRes] = useState()
//     function sum() {
//         setRes(+inp1 + +inp2)
//         setInp1('')
//         setInp2('')
//     }
//     function difference() {
//         setRes(+inp1 - +inp2)
//         setInp1('')
//         setInp2('')
//     }
//     function mult() {
//         setRes(+inp1 * +inp2)
//         setInp1('')
//         setInp2('')
//     }
//     function division() {
//         setRes(+inp1 / +inp2)
//         setInp1('')
//         setInp2('')
//     }


//     return (
//         <div>
//             <p>Создайтекомпонент простого калькулятора,который выполняеткоманды: +, -, *, /</p>
//             <input value={inp1} onChange={(e) => setInp1(e.target.value)} placeholder='введите число'></input>
//             <input value={inp2} onChange={(e) => setInp2(e.target.value)} placeholder='введите число'></input>
//             <button onClick={sum}>+</button>
//             <button onClick={difference}>-</button>
//             <button onClick={mult}>*</button>
//             <button onClick={division}>/</button>

//             <h1>{res}</h1>
//         </div>
//     )
// }
