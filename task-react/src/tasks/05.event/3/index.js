function Event3() {
    function check(event) {
        if (event.key === 'Enter') {
            const test = event.target.value.split('').reverse().join('')
            if (event.target.value === test) console.log('слово - палиндром')
            else console.log('слово не палиндром');
        }
    }

    return (
        <div>
            <p>По нажатию на enter в input onKeyDown выявлять является ли введенное слово палиндромом. Результат проверки отобразить вконсоль</p>

            <input onKeyDown={check}></input>
        </div>
    )
}

export default Event3