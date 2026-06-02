import {
    useContext
} from 'react'

import {
    AuthContext
} from '../context/AuthContext'

export default function Profile() {

    const {
        user,
        logout
    } = useContext(AuthContext)

    return (

        <div className="page">

            <h1>Profile</h1>

            <h2>
                Welcome, {user}
            </h2>

            <button className="btn btn-logout" onClick={logout}>
                Logout
            </button>

        </div>

    )

}