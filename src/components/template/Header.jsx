import React from 'react'
import { StyleSheet, Image, Linking, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '../../hooks/useAuth'

const Header = ({ navigation, name }) => {
    const { logout } = useAuth()
    
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 4,
            flexDirection: 'row',
            backgroundColor: '#1e1f23',
            borderBottomWidth: 1,
            borderBottomColor: '#282828',
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                }}>
                    <AntDesign
                        name={'user'}
                        size={19}
                        color={name === 'Profile' ? '#ffffff' : '#76787a'}
                    />
                    <Text style={name === 'Profile' ? styles.textActive : styles.text}>Профиль</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Dining')}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                }}>
                    <Ionicons
                        name={'fast-food-outline'}
                        size={19}
                        color={name === 'Dining' ? '#ffffff' : '#76787a'}
                    />
                    <Text style={name === 'Dining' ? styles.textActive : styles.text}>Столовая</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                }}>
                    <Ionicons
                        name={'chatbubble-outline'}
                        size={19}
                        color={name === 'Chat' ? '#ffffff' : '#76787a'}
                    />
                    <Text style={name === 'Chat' ? styles.textActive : styles.text}>Чат</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('http://stgaujob.ru')}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                }}>
                    <Ionicons
                        name={'briefcase-outline'}
                        size={19}
                        color={name === 'Job' ? '#ffffff' : '#76787a'}
                    />
                    <Text style={name === 'Job' ? styles.textActive : styles.text}>Работа</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                }}>
                    <AntDesign
                        name={'logout'}
                        size={19}
                        color={name === 'Logout' ? '#ffffff' : '#76787a'}
                    />
                    <Text style={name === 'Logout' ? styles.textActive : styles.text}>Выход</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#76787a',
        fontSize: 11,
        fontFamily: 'mt-medium',
    },
    textActive: {
        color: '#ffffff',
        fontFamily: 'mt-medium',
        fontSize: 11,
        fontWeight: 500
    }
})

export default Header