import {useState} from 'react';

function UseState13() {
    const [color, setColor] = useState('#fff')
    const showColor = (e) => {
        setColor(e.target.id)
    }

    return (
        <div>
            <p>Изменение цвета с использованием useState: Создайте компонент выбора цвета,
                который позволяет пользователю выбирать цвет из списка и отображает цвет
                выбранного цвета на экране.</p>
                <div onClick= {showColor}>
                    <h1>Выберите цвет</h1>
                    <p id='yellow'>Желтый</p>
                    <p id='pink'>Розовый</p>
                    <p id='gray'>Серый</p>
                    <p id='blue'>Синий</p>
                    <p id='green'>Зеленый</p>
                    <p style= {{width: '100px', height: '60px', border: '1px solid #000', backgroundColor: color}}>Тут отображается текст</p>
                </div>
        </div>
    )
}

export default UseState13