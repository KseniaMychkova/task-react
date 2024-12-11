function JSX3 (){
    const arr = ['hgdjhgsd@kjrgjk', 'jhdhgdjgh', 'vvvv@vvv', 'vvvvv']
    // const result = arr.filter((el)=> <p>{el.includes('@')}</p>)
    return (
        <div>
            <p>На входе статичный массив строк. Ваша задача отфильтровать и отобразить на странице только те строки, которые содержат знак @</p>
            {arr.filter((el)=> <p>{el.includes('@')}</p>)}
        </div>
    )
}

export default JSX3