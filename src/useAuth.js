import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { onAuthStateChanged } from '@firebase/auth'
import { auth, login, logout } from './db/db'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const loginHandler = async (email, password) => {
        setIsLoading(true);

        try {
            await login(email, password)
        } catch(error) {

        } finally {
            setIsLoading(false)
        }
    }

    const logoutHandler = async () => {
        setIsLoading(true)

        try {
            await logout()
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(
        () =>
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser({
                        ...user,
                    })
                } else {
                    setUser(null)
                }

                setIsLoadingInitial(false)
        }),
        []
    )

    const values = useMemo(
        () => ({
            user,
            isLoading,
            login: loginHandler,
            logout: logoutHandler,
        }),
        [user, isLoading]
    )

    return (
        <AuthContext.Provider value={values}>
            {!isLoadingInitial && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)