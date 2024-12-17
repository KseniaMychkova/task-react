function Event1() {
    const pass = '12345Abc!'
    function isValid() {
        try {
            if (pass.length < 8) {throw new Error ('Пароль должен состоять не менее чем из 8 символов')}
            if (!/[a-zA-Z0-9]+(?=.*[!$#@^&*]).{8,}/gm.test(pass)) { throw new Error('Пароль не соответствует требованиям') }
            console.log('sucsess')
        } catch (error) {
            console.log(error.message);

        }
    }
    return (
        <div>
            <p>На входе переменная пароля. По клику на кнопку необходимо реализовать метод валидации. Написать регулярное выражение: пароль от 8 символов, содержит числа, буквы, !@#$^&*. Результат отобразить в консоль</p>
            <button onClick={() => {
                isValid({ pass })
            }}>Кнопка</button>
        </div>
    )
}


export default Event1