import React from 'react'
import { View, Text, Image } from 'react-native'
import { useAuth } from '../../hooks/useAuth'

const MessagesIm = ({ message }) => {
    const { user } = useAuth()

    const isMsgByAuthUser = user.uid === message.userId

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor: isMsgByAuthUser ? '#32C55C' : 'purple',
                paddingVertical: 6,
                paddingHorizontal: 10,
                alignSelf: isMsgByAuthUser ? 'flex-end' : 'flex-start',
                marginBottom: 20,
            }}
        >
            <Image
                source={{ uri: 'https://www.exibartstreet.com/wp-content/uploads/avatars/2465/5e0de52aeee8b-bpfull.jpg' }}
                style={{ width: 50, height: 50, borderRadius: 50, marginRight: 6 }}
            />
            <Text style={{ color: '#fff', fontSize: 16 }}>{message.text}</Text>
        </View>
    )
}

export default MessagesIm