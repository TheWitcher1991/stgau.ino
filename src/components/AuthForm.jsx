import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'
import { useAuth } from '../useAuth'

const AuthForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, isLoading } = useAuth()

    return (
        <View>
            <View style={{ width: 300 }}>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    autoFocus
                    placeholder='Enter email'
                />
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Enter password'
                    secureTextEntry={true}
                />
                <Button
                    onPress={async () => await login(email, password)}
                    title={isLoading ? 'Loading...' : 'Sign in'}
                    disabled={isLoading}
                    color={'#fff'}
                />
            </View>
        </View>
    )
}

export default AuthForm