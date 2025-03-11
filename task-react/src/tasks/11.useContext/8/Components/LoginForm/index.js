import { useContext, useState } from 'react'
import { AuthContext } from '../../../../../Context'
import { Link } from 'react-router-dom'



function LoginForm() {
    const userInfo = useContext(AuthContext)
    const [inp, setInp] = useState('')

    function login() {
        userInfo.login({ ...userInfo.userObj, username: inp })
    }

    return (
        <div>
            <h2>Авторизуйтесь</h2>
            <input onChange={(e) => setInp(e.target.value)} placeholder='Введите свое имя'></input>
            <button onClick={login}><Link to ='/usecontext/profile'>Войти</Link></button>
        </div>
    )
}

export default LoginForm