import { useContext } from 'react'
import { AuthContext } from '../../../../../Context'
import { Link } from 'react-router-dom'


function UserProfile() {
    const userInfo = useContext(AuthContext)
    function logout() {
        userInfo.logout({...userInfo.userObj, username: null})
    }

    return (
        <div>
            <h1>{userInfo.userObj.username}</h1>
            <button onClick={logout}><Link to='/usecontext/8'>Выйти</Link></button>
        </div>
    )
}

export default UserProfile