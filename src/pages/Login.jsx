import { useState } from 'react'

import {
    useNavigate
} from 'react-router-dom'

import {
    useContext
} from 'react'

import {
    AuthContext
} from '../context/AuthContext'

export default function Login() {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const { login } = useContext(AuthContext)

    function handleSubmit(event) {

        event.preventDefault()

        if (!email || !password) {

            setError('Fill all fields')

            return

        }

        login(email)

        navigate('/profile')

    }

    return (

        <div className="page login-page">

            <h1>Login</h1>

            <form className="login-form" onSubmit={handleSubmit}>

                <input
                    className="input"
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                />

                <br />
                <br />

                <input
                    className="input"
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                />

                <br />
                <br />

                <button className="btn" type='submit'>
                    Login
                </button>

            </form>

            {
                error && (
                    <h3 className="error-msg">{error}</h3>
                )
            }

        </div>

    )

}