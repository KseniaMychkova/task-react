
function UseState11() {
    return (
        <div>
            <p>Форма с использованием useState: Создайте компонент текстового поля, который
                позволяет пользователю по изменению значения инпута отображать значение в
                консоль</p>
                <input onChange={(e)=> console.log(e.target.value)} placeholder="введите значение"></input>
        </div>
    )
}

export default UseState11