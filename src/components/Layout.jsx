import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <LinearGradient
            colors={['#090909', '#0f0f11']}
            start={{ x: 1.1, y: 0.9 }}
            style={{
                backgroundColor: '#0f0f11',
                height: '100%',
                width: '100%',
            }}
        >
            { children }
        </LinearGradient>
    )
}

export default Layout