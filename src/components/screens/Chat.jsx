import React from 'react'
import { ScrollView } from 'react-native'

import Layout from '../template/Layout'
import ChatHeader from '../template/ChatHeader'
import MessagesList from '../messages/MessagesList'
import Header from '../template/Header'

const Chat = ({ navigation }) => {
    return (
        <Layout>
            
            <ScrollView>
                <ChatHeader />
                <MessagesList />
            </ScrollView>

            <Header name='Chat' navigation={navigation} />
        </Layout>
    )
}

export default Chat