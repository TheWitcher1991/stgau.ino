import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks/useAuth'

const MessagesItem = ({ conversation }) => {
    const navigation = useNavigation()

    const { user } = useAuth()

    if (user?.uid === conversation.userId) return null

    return (
        <View style={{width:'100%'}}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Im', {
                        userId: conversation.userId,
                    })
                }
                style={{
                    marginBottom: 25,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={{ uri: conversation.image }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <View style={{ flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center', marginBottom: 6 }}>
                        <Text style={{ fontFamily: 'mt-medium', fontWeight: '500', color: '#e1e3e6', fontSize: 14 }}>
                            {conversation.name}
                        </Text>
                        <Text style={{ fontFamily: 'mt-medium', fontWeight: '400', color: '#5F5F5F' }}>{conversation.time}</Text>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'mt-medium', color: '#686868' }}>{conversation.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MessagesItem