function JSX7() {
    const arr = [1, 5, 'gffgfg', 9, 12, 'hgdfhd']

    return (
        <div>
            <p>
                Создайте компонент, который принимает статичный массив чисел и строк. Если элемент- число, то отобразите его в параграфе с зеленым цветом текста, если строка- с синим.
            </p>
            <p>
                {arr.map((el) => {
                    if (isNaN(el)) return <p style={{ color: 'blue' }}>{el}</p>
                    else return <p style={{ color: 'green' }}>{el}</p>
                })}
            </p>
        </div>
    )
}

export default JSX7