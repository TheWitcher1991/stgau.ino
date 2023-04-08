import React from 'react'
import { ScrollView } from 'react-native'

import Layout from '../template/Layout'
import Stories from '../Stories'
import MessagesList from '../messages/MessagesList'
import Header from '../template/Header'

const Chat = ({ navigation }) => {
    return (
        <Layout>
            
            <Header name='Chat' navigation={navigation} />
            
            <ScrollView>
                <Stories />
                <MessagesList />
            </ScrollView>
        </Layout>
    )
}

export default Chat