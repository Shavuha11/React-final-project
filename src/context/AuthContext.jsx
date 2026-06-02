import {
    createContext,
    useEffect,
    useState
} from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {

        const savedUser =
            localStorage.getItem('user')

        if (savedUser) {
            setUser(savedUser)
        }

    }, [])

    function login(email) {

        setUser(email)

        localStorage.setItem('user', email)

    }

    function logout() {

        setUser(null)

        localStorage.removeItem('user')

    }

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>

    )

}
