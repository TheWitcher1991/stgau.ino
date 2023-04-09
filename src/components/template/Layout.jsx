import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <LinearGradient
            colors={['#151515', '#080808']}
            start={{ x: 1.1, y: 0.9 }}
            style={{
                backgroundColor: '#0f0f11',
                height: '100%',
                width: '100%',
                paddingTop: 30,
            }}
        >
            { children }
        </LinearGradient>
    )
}

export default Layout