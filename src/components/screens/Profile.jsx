import React from 'react'
import { View } from 'react-native'
import { useAuth } from '../../hooks/useAuth'

import Layout from '../template/Layout'
import Header from '../template/Header'

const Profile = ({ navigation }) => {
    const { user } = useAuth
    
    return (
        <Layout>

            <Header name='Profile' navigation={navigation} />
            
            <View>
                
                
                
            </View>

        </Layout>
    )
}

export default Profile