import { useReducer } from 'react'

function generatechangeColor(colorH1, change) {
    const arrOfColors = ['red', 'blue', 'purple', 'pink'];
    switch (change) {
        case ('newColor'):
            return arrOfColors[Math.round(Math.random() * arrOfColors.length)];
        default:
            return;
    }
}

function UseReducer4() {
    const [colorH1, setColorH1] = useReducer(generatechangeColor, 'black')

    function changeColor() {
        setColorH1('newColor')
    }

    return (
        <div>
            <p>Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой кнопке.</p>
            <h1 style={{ color: colorH1 }}>Test text</h1>
            <button onClick={changeColor}>Click</button>
        </div>
    )
}

export default UseReducer4