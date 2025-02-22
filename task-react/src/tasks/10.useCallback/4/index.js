import {useState, useCallback} from 'react'

function UseCallback1() {
    const colorArr = ['red', 'blue', 'green', 'gray']
    const [color, setColor] = useState('white')

    const showColor = useCallback((e)=>{
        setColor(e.target.id)
    }, [color])
    return (
        <div>
            <p>Создайте компонент, который предоставляет пользователю выбор цвета из списка. При выборе цвета, компонент должен отображать выбранный цвет на странице. Используйте useCallback, чтобы оптимизировать функцию выбора цвета.</p>
            <div style={{backgroundColor: color, width: '200px', height: '70px'}}></div>
        <ul>
            {colorArr.map(el=> <li id={el} onClick={showColor}>{el}</li>)}
        </ul>
        </div>
    )
}

export default UseCallback1
