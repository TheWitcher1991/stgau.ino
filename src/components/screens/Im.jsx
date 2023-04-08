import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
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

const Im = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const { user } = useAuth()

    const {
        params: { userId },
    } = useRoute()

    const sendMessage = async () => {
        try {
            await addDoc(collection(db, 'messages'), {
                timestamp: serverTimestamp(),
                userId: user.uid,
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
    
    return (
        <Layout>
            <View>
                
            </View>
            <View style={{ padding: 20 }}>
                <ScrollView style={{ height: '75%', flexDirection: 'column-reverse' }}>
                    {messages.map(message => (
                        <MessagesIm key={message.text} message={message} />
                    ))}
                </ScrollView>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <TextInput
                        placeholder='Enter your message'
                        onChangeText={setMessage}
                        value={message}
                        style={{
                            height: 40,
                            padding: 10,
                            backgroundColor: '#fff',
                            borderRadius: 15,
                            width: '86%',
                        }}
                    />
                    <TouchableOpacity onPress={sendMessage}>
                        <MaterialCommunityIcons
                            name='send-circle-outline'
                            size={42}
                            color='#fff'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    )
}

export default Im