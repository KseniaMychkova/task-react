import IMG from './images.jpg'

function JSX4 () {
    const arr = ['fff', 'ggg', 'nnn', 'ccc']
    const result = arr.map((el)=> <div><p>{el}</p><img src={IMG} alt=''></img></div>)
    return (
        <div>
            <p>На входе статичный массив строк. Ваша задача отобразить на странице все строки массива, а также картинку. Каждая итерация будет возвращать</p>
            {result}
        </div>
    )
}

export default JSX4