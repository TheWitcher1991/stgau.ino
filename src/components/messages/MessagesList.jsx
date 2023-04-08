import React from 'react'
import MessagesItem from './MessagesItem'

import { View } from 'react-native'

export const conversations = [
    {
        image:
            'https://yt3.googleusercontent.com/ytc/AL5GRJXzA7I7q2q72hNGlcDXQCg0Q2bEkzs6y3AFhXCAzw=s900-c-k-c0x00ffffff-no-rj',
        name: '9 группа ИСИТ',
        text: 'Внимание!',
        time: '09:11',
        userId: 'C6uVHtPIODfHnPu7LI2CEuhTFnc2',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ANVmA23FZZhVYWmJ0kNrdzNiNqi0jDXK-BG5jtwbe6SDq4CpJ_VIDk7TNxsFP0UdWxs&usqp=CAU',
        name: 'Антон',
        text: 'Хей, бро',
        time: '12:15',
        userId: '1OGEhuFfoqRNWf3zYHAaajESht52',
    },
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQfnUg9Id4WNF0Tr96PDFUhH0GvsSPs-wNjDNZxD5w0fNXDapGI93bL9_sjsoAGEwF9Q&usqp=CAU',
        name: 'Анастия',
        text: 'Привет',
        time: '15:31',
        userId: 'w2efqwef2w3rt',
    },
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrXhdNNRWovT7sqVEdjzYpBNqYIh6ISneHjH04im8RN79G_y0egwd7E5TxvN_Qik3EUA&usqp=CAU',
        name: 'Анна',
        text: 'Как дела?',
        time: '23:22',
        userId: 'w2efqwef2w3rt',
    },
]

const MessagesList = () => {
    return (
        <View
            style={{
                backgroundColor: '#151515',
                padding: 13,
                paddingTop: 25,
                paddingBottom: 0,
                borderRadius: 10,
                marginHorizontal: 10
            }}
        >
            {conversations.map(conversation => (
                <MessagesItem key={conversation.name} conversation={conversation} />
            ))}
        </View>
    )
}

export default MessagesList