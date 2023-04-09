import React, {useState} from 'react'
import MessagesItem from './MessagesItem'
import users from '../../utils/users'
import {Pressable, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";

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
    const [name, setName] = useState('');
    
    return (
        <View>
            
            <View style={{
                backgroundColor: '#1f1f22',
                height: 36,
                marginTop: 16,
                marginBottom: 20,
                marginHorizontal: 10,
                borderRadius: 10,
                position: 'relative'
            }}>

                <Pressable style={{
                    position: 'absolute',
                    top: 6,
                    left: 12,
                }} onPress={() => {
                    
                }}>
                    <AntDesign
                        name={'search1'}
                        size={19}
                        color={'rgb(121, 117, 117)'}
                    />
                </Pressable>
                
                <TextInput
                    placeholderTextColor='#585858'
                    onChangeText={setName}
                    style={{
                        height: 36,
                        fontFamily: 'mt-medium',
                        paddingHorizontal: 12,
                        paddingLeft: 40,
                        fontSize: 13,
                        backgroundColor: '#1f1f22',
                        color: '#585858',
                        borderRadius: 10,
                        
                    }}
                    placeholder='Поиск'
                />
                
            </View>
            
          

            <ScrollView horizontal={true}>
                <View style={{marginBottom: 20, marginHorizontal: 12, flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{marginRight: 6}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 6,
                            paddingHorizontal: 14,
                            backgroundColor: 'rgb(20, 73, 62)',
                            borderRadius: 10,
                        }}>
                            <Ionicons
                                name={'chatbubbles-outline'}
                                size={20}
                                color={'#cecece'}
                            />
                            <Text style={{
                                fontFamily: 'mt-medium',
                                color: '#cecece',
                                marginLeft: 6,
                                fontSize: 13,
                            }}>Все</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 6,
                            paddingHorizontal: 14,
                            borderRadius: 10,
                        }}>
                            <Feather
                                name={'users'}
                                size={20}
                                color={'rgb(118, 120, 122)'}
                            />
                            <Text style={{
                                fontFamily: 'mt-medium',
                                color: 'rgb(118, 120, 122)',
                                marginLeft: 6,
                                fontSize: 13,
                            }}>Беседы</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 6,
                            paddingHorizontal: 14,
                            borderRadius: 10,
                        }}>
                            <AntDesign
                                name={'user'}
                                size={20}
                                color={'rgb(118, 120, 122)'}
                            />
                            <Text style={{
                                fontFamily: 'mt-medium',
                                color: 'rgb(118, 120, 122)',
                                marginLeft: 6,
                                fontSize: 13,
                            }}>Личные</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
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
        </View>
    )
}

export default MessagesList