import React from 'react'
import MessagesItem from './MessagesItem'
import users from '../../utils/users'
import { View } from 'react-native'

console.log(users[0].uid)

export const conversations = [
    {
        id: '1',
        image:
            'https://yt3.googleusercontent.com/ytc/AL5GRJXzA7I7q2q72hNGlcDXQCg0Q2bEkzs6y3AFhXCAzw=s900-c-k-c0x00ffffff-no-rj',
        name: '9 группа ИСИТ',
        text: 'Внимание!',
        time: '09:11',
        userId: 'K7RNW0xluxZs1C4BzAEV8miTEEC3',
        toId: '4aGck1EQhn9qNnj0rWKeFLmgL0hSS8'
    },
    {
        id: '2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ANVmA23FZZhVYWmJ0kNrdzNiNqi0jDXK-BG5jtwbe6SDq4CpJ_VIDk7TNxsFP0UdWxs&usqp=CAU',
        name: 'Антон',
        text: 'Хей, бро',
        time: '12:15',
        userId: 'K7RNW0xluxZs1C4BzAEV8miTEEC3',
        toId: '5LoJgNYIdcNLNNPLrciZK3GPmKJHZ4'
    },
    {
        id: '3',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQfnUg9Id4WNF0Tr96PDFUhH0GvsSPs-wNjDNZxD5w0fNXDapGI93bL9_sjsoAGEwF9Q&usqp=CAU',
        name: 'Анастасия',
        text: 'Привет',
        time: '15:31',
        userId: 'K7RNW0xluxZs1C4BzAEV8miTEEC3',
        toId: '5tR2bgdY80kDJ352bRM6ebw3q90Yav'
    },
    {
        id: '3',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrXhdNNRWovT7sqVEdjzYpBNqYIh6ISneHjH04im8RN79G_y0egwd7E5TxvN_Qik3EUA&usqp=CAU',
        name: 'Анна',
        text: 'Как дела?',
        time: '23:22',
        userId: 'K7RNW0xluxZs1C4BzAEV8miTEEC3',
        toId: 'kHdEdZHUBtYYlAQdWdz5GiQ6pZypJr'
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