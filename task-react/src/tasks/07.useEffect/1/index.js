import {useState, useEffect} from 'react';

function UseEffect1() {
    const [inp, setInp] = useState('')
    useEffect (()=>{
        console.log(inp);
    }, [inp])
    return (
        <div>
            <p>Форма ввода с использованием useState и useEffect: Создайте компонент React,
                который содержит форму с полем ввода. Используйте хук useState для хранения
                значения введенного текста и хук useEffect для отслеживания изменений этого
                значения. При каждом изменении значения в поле ввода, выводить его в консоль
                с помощью useEffect.</p>
                <input onChange={(e)=> setInp(e.target.value)}></input>
        </div>
    )
}

export default UseEffect1