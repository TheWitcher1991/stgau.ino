import React, { useEffect, useState } from 'react'
import {
    View,
    ScrollView,
    TextInput,
    Text,
    TouchableOpacity, Image,
} from 'react-native'
import {AntDesign, Feather, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import Layout from '../template/Layout'
import { useRoute } from '@react-navigation/core'
import {
    onSnapshot,
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
} from 'firebase/firestore'
import { db } from '../../utils/db'
import { useAuth } from '../../hooks/useAuth'
import MessagesIm from "../messages/MessagesIm";
import {useNavigation} from "@react-navigation/native";

const Im = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const { user } = useAuth()

    const navigation = useNavigation()

    const {
        params: { chatId, ctx },
    } = useRoute()

    const sendMessage = async () => {
        try {
            await addDoc(collection(db, 'messages'), {
                timestamp: serverTimestamp(),
                userId: user.uid,
                chatId: chatId,
                img: user.img,
                text: message,
            })
        } catch (error) {
            alert(error)
        }

        setMessage('')
    }

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'messages'), orderBy('timestamp', 'asc')),
                snapshot => {
                    setMessages(
                        snapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                }
            ),
        []
    )
    
    console.log(messages)
    
    return (
        <Layout>
            
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 12,
                marginVertical: 20,
                marginTop: 0
            }}>
                
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                        <AntDesign
                            name='arrowleft'
                            size={20}
                            color='#fefefe'
                        />

                    </TouchableOpacity>

                    <View style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image
                            source={{ uri: ctx.image}}
                            style={{ width: 40, height: 40, borderRadius: 50 }}
                        />
                        <Text style={{
                            marginLeft: 10,
                            color: '#fefefe',
                            fontSize: 16,
                            fontFamily: 'mt-medium',
                        }}>{ctx.name}</Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <Feather
                        name='more-vertical'
                        size={20}
                        color='#fefefe'
                    />

                </TouchableOpacity>
                
            </View>
            
            <View>
                <ScrollView style={{ flexDirection: 'column-reverse', marginHorizontal: 12, }}>
                    {messages.map(message => {
                        
                        if (chatId === message.chatId) {
                            return (
                                <MessagesIm chat={chatId} key={message.text} message={message} img={user.img} />
                            )
                        }
                        
                    })}
                </ScrollView>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 12,
                    marginVertical: 16,
                }}>
                    <TextInput
                        placeholderTextColor='#585858'
                        style={{
                            height: 36,
                            fontFamily: 'mt-medium',
                            padding: 12,
                            fontSize: 13,
                            backgroundColor: '#1f1f22',
                            color: '#585858',
                            borderRadius: 10,
                            width: '90%',
                        }}
                        placeholder='Введите ваше сообщение'
                        onChangeText={setMessage}
                        value={message}
                    />
                    <TouchableOpacity onPress={sendMessage}>
                        <Feather
                            name='send'
                            size={24}
                            color='#1a594c'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    )
}

export default Im