function JSX2() {
    const arr = [4, 16, 32]
    const result = arr.map((el)=> <h1>{Math.floor(Math.sqrt(el))}</h1>)
    return (
        <div>
            <p>На входе статичный массив чисел. Ваша задача найти корень каждого числа и отобразить на странице в виде h1</p>
            {result}
        </div>
    )
}

export default JSX2