import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { onAuthStateChanged } from '@firebase/auth'
import { auth, login, logout, app } from '../utils/db'

const AuthContext = createContext({})
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const loginHandler = async (email, password) => {
        setIsLoading(true);
        try {
            await login(email, password)
        } catch(error) {
            alert(error)
        } finally {
            setIsLoading(false)
        }
    }

    const logoutHandler = async () => {
        setIsLoading(true)
        try {
            await logout()
        } catch (error) {
            alert(error)
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
                        role: 'user',
                        name: 'Ашот Свазян',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ANVmA23FZZhVYWmJ0kNrdzNiNqi0jDXK-BG5jtwbe6SDq4CpJ_VIDk7TNxsFP0UdWxs&usqp=CAU',
                        phone: '+7 (909) 652-45-56',
                        direction: 'Информационные системы и технологии',
                        faculty: 'Экономический',
                        study: '21.7151.3.1.037'
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





