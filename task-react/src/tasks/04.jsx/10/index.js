function JSX10() {
    const arr = [1, 1, 5, 6, 6, 'dgdg', 'dgdg']
    const newArr = []
    arr.forEach(el=> {
        if(!newArr.includes(el)) newArr.push(el)
    })
    return (
        <div>
            <p>Реализуйте компонент, который принимает статичный массив и отображает только уникальныезначения,убираяповторяющиеся</p>
            {newArr.map((el) => <p>{el}</p>)}
        </div>
    )
}

export default JSX10