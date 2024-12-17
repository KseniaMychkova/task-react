function JSX9 () {
    const arr = [12, 'hfghfgh', 3, 78, 'hfjhjd']
    return (
        <div>
            <p>Создайте компонент, который принимает статичный массив элементов и присваивает каждому элементу случайный цвет фона. Выведите элементы с их цветами настранице.</p>
            <div>
                {arr.map(el=>{
                    return <p style={{backgroundColor: `#${Math.round(Math.random() * 1000)}`}}>{el}</p>
                })}
            </div>
        </div>
    )
}

export default JSX9