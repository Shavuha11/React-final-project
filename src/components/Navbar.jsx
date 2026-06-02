import {
    Link
} from 'react-router-dom'

import {
    useContext
} from 'react'

import {
    AuthContext
} from '../context/AuthContext'

export default function Navbar() {

    const { user } =
        useContext(AuthContext)

    return (

        <nav className="navbar">

            <Link className="nav-link" to='/'>
                Home
            </Link>

            <br />

            <Link className="nav-link" to='/products'>
                Products
            </Link>

            <br />

            {
                user ? (
                    <Link className="nav-link" to='/profile'>
                        Profile
                    </Link>
                ) : (
                    <Link className="nav-link" to='/login'>
                        Login
                    </Link>
                )
            }

            <hr className="nav-hr" />

        </nav>

    )

}