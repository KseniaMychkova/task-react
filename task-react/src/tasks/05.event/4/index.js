function Event4 (){
    const color = ['red', 'white', 'blue']
    function change (event) {
        event.target.style = `background-color: ${color[Math.round(Math.random() * color.length)]}`
    }

    return (
        <div>
            <p>Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет в соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный выборцветаизмассиваприкаждомклике.</p>
            <button onClick={change}>button</button>
        </div>
    )
}

export default Event4