import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthForm from './components/AuthForm'
import { useAuth } from './hooks/useAuth'
import Chat from './components/Screens/Chat'
import Dining from './components/Screens/Dining'

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
                    <Stack.Screen name='Chat' component={Chat} />
                    <Stack.Screen name='Dining' component={Dining} />
                </>
            ) : (
                <Stack.Screen name='Auth' component={AuthForm} />
            )}
        </Stack.Navigator>
    )
}

export default StackNavigation