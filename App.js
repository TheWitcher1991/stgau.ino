import React, {useCallback, useEffect, useState} from 'react'
import StackNavigation from './src/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/hooks/useAuth'
import * as SplashScreen from 'expo-splash-screen'

import * as Font from 'expo-font'

SplashScreen.preventAutoHideAsync()

const App = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    
    useEffect(() => {
        const prepare = async () => {
            try {
                await SplashScreen.preventAutoHideAsync()
                
                await Font.loadAsync({
                    'mt-medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
                    'mt-regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
                    'mt-light': require('./assets/fonts/Montserrat/Montserrat-Light.ttf')
                })
                
                await new Promise(resolve => setTimeout(resolve, 2000))
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }
        
        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);
    
    if (!appIsReady) {
        return null
    }

    return (
        <NavigationContainer>
            <AuthProvider>
                <StackNavigation />
            </AuthProvider>
        </NavigationContainer>
    )
}

export default App