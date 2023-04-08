import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthForm from './components/AuthForm'
import { useAuth } from './useAuth'

const Stack = createStackNavigator()

// TODO: ПОКА ЧТО ТАК, Я ЕЩЁ СОЗДАМ ЭКРАНЫ

const Home = () => {
    return (
        <View>
            <Text>ПРИВЕТ</Text>
        </View>
    )
}

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
                    <Stack.Screen name='Home' component={Home} />
                </>
            ) : (
                <Stack.Screen name='Auth' component={AuthForm} />
            )}
        </Stack.Navigator>
    )
}

export default StackNavigation