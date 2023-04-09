import React from 'react'
import { View, Text, Image } from 'react-native'
import { useAuth } from '../../hooks/useAuth'

const MessagesIm = ({ message }) => {
    const { user } = useAuth()

    const isMsgByAuthUser = user.uid === message.userId

    console.log(message)
    
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 0,
                backgroundColor: isMsgByAuthUser ? '#24a147' : 'purple',
                paddingVertical: 4,
                paddingHorizontal: 10,
                alignSelf: isMsgByAuthUser ? 'flex-end' : 'flex-start',
                marginBottom: 16,
            }}
        >
            <Text style={{ color: '#fefefe', fontSize: 14 }}>{message.text}</Text>
        </View>
    )
}

export default MessagesIm