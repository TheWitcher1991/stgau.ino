import React, { useState } from 'react'
import StackNavigation from './src/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/hooks/useAuth'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

const fonts = () => Font.loadAsync({
    'mt-medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf')
})

const App = () => {
    const [font, setFont] = useState(false)
    
    if (font) {
        return (
            <NavigationContainer>
                <AuthProvider>
                    <StackNavigation />
                </AuthProvider>
            </NavigationContainer>
        ) 
    } else {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => setFont(true)}
                onError={console.warn}
            />
        )
    }
}

export default App