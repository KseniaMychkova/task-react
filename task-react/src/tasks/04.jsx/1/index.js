function JSX1 () {
    const arr = [1, 2, 3, 4]
    const result = arr.map((el) => el ** 2)
    return (<div>
        <p> На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и отобразить на странице </p>
        <p>Результат: {result}</p>

    </div>)
}

export default JSX1