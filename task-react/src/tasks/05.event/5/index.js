function Event5 (){
    const arr = [5, 9, 25, 78, 1]
    function sum () {
        console.log(arr.reduce ((sum, el) => sum += el));

    }
    return (
        <div>
            <p>Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку вычислите и выведите сумму всех чисел из массива в консоль.</p>
            <button onClick={sum}>Button</button>
        </div>
    )
}

export default Event5