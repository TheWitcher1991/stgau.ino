import React, { useState } from 'react'
import {StyleSheet, TextInput, View, Pressable, Text, Image, Alert} from 'react-native'
import { useAuth } from '../hooks/useAuth'

import Layout from './template/Layout'

const AuthForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const { login, isLoading, error } = useAuth()

    return (

        <Layout>
            
            <View style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Image
                    style={{
                        width: 125,
                        height: 125,
                        marginBottom: 50,
                    }}
                    source={require('../../assets/img/logo.png')}
                />
                
                <View style={{width: 300}}>

                    <Text>{error}</Text>

                    <Text style={{
                        color:'#fefefe',
                        fontSize: 20,
                        fontFamily: 'mt-regular',
                        textAlign: 'left',
                        marginBottom: 6
                    }}>Добро пожаловать</Text>
                    
                    <Text style={{
                        color:'#4f4e51',
                        fontSize: 13,
                        fontFamily: 'mt-regular',
                        textAlign: 'left',
                        marginBottom: 30
                    }}>
                        Введите данные от вашего личного кабинета студента
                    </Text>

                    <Text style={{
                        color:'#fefefe',
                        fontSize: 13,
                        fontFamily: 'mt-regular',
                        textAlign: 'left',
                        marginBottom: 6
                    }}>Логин</Text>
                    <TextInput
                        placeholderTextColor='#585858'
                        style={stylesCreated.input}
                        onChangeText={setEmail}
                        value={email}
                        autoFocus
                        placeholder='Введите логин'
                    />

                    <Text style={{
                        color:'#fefefe',
                        fontSize: 13,
                        fontFamily: 'mt-regular',
                        textAlign: 'left',
                        marginBottom: 6
                    }}>Пароль</Text>
                    <TextInput
                        placeholderTextColor='#585858'
                        style={stylesCreated.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='Введите пароль'
                        secureTextEntry={true}
                    />

                    <Pressable style={styles.button} onPress={async () => await login(email, password)}>
                        <Text style={styles.text}>{isLoading ? 'Загрузка...' : 'Войти'}</Text>
                    </Pressable>
                </View>
            </View>
            
        </Layout>
        
      
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: '#f1f1f1',
        marginTop: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontFamily: 'mt-medium',
        color: '#111111',
    },
});

const stylesCreated = StyleSheet.create({
    input: {
        height: 48,
        marginBottom: 20,
        borderWidth: 1,
        fontFamily: 'mt-medium',
        padding: 16,
        fontSize: 14,
        backgroundColor: '#212121',
        color: '#585858',
        borderRadius: 10,
    },
})

export default AuthForm