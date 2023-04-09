import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthForm from './components/AuthForm'
import { useAuth } from './hooks/useAuth'
import Profile from './components/screens/Profile'
import Chat from './components/screens/Chat'
import Dining from './components/screens/Dining'
import Im from './components/screens/Im'

const Stack = createStackNavigator()

const StackNavigation = () => {
    const { user } = useAuth()
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            {user ? (
                <>
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='Dining' component={Dining} />
                    <Stack.Screen name='Chat' component={Chat} />
                    <Stack.Screen name='Im' component={Im} />
                </>
            ) : (
                <Stack.Screen name='Auth' component={AuthForm} />
            )}
        </Stack.Navigator>
    )
}

export default StackNavigation






