function Event6() {
    const arr = ['anna', 'tim', 'kseniya']
    function random() {
        console.log(arr[Math.floor(Math.random() * arr.length)]);
    }

    return (
        <div>
            <p>Создайте компонент с массивом элементов и кнопкой. При каждом клике на кнопкувыбирайтеслучайныйэлемент измассиваиотображайтеего вконсоль.</p>
            <button onClick={random}>Button</button>
        </div>
    )
}

export default Event6