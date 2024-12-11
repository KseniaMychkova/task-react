function JSX5 () {
    const arr = [1, 'd', 4, 5, 's', 'w']
    let arrNew = []
    arr.forEach((el) => {
        if(!isNaN(el)) {
            if (el % 2 === 0) arrNew.push('четное')
            else arrNew.push('нечетное')
        }
        else {
            arrNew.push(el)  
        }
    })
    return (
        <div>
            <p>На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае числа четность и нечетность текущего значения в параграфе, в случае строки отобразить саму строку в параграфе</p>
            {arrNew}
        </div>
    )
}

export default JSX5