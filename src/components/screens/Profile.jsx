import React from 'react'

import Layout from '../template/Layout'
import Header from '../template/Header'

const Profile = ({ navigation }) => {
    return (
        <Layout>

            <Header name='Profile' navigation={navigation} />

        </Layout>
    )
}

export default Profile