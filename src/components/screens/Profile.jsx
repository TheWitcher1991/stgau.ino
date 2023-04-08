import React from 'react'
import {Image, ScrollView, View, Text} from 'react-native'
import { useAuth } from '../../hooks/useAuth'

import Layout from '../template/Layout'
import Header from '../template/Header'
import Stories from "../Stories";
import MessagesList from "../messages/MessagesList";
import {LinearGradient} from "expo-linear-gradient";
import {AntDesign, Feather, Fontisto, Ionicons} from "@expo/vector-icons";

const Profile = ({ navigation }) => {
    const { user } = useAuth
    
    return (
        <Layout>

            <ScrollView>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                   
                    borderRadius: 10,
                    marginVertical: 20,
                    marginHorizontal: 20,
                    position: 'relative'
                }}>
                    <View style={{
    height: 85,
    width: '100%'
}} >
                        <LinearGradient
                            colors={['#14493E', '#212121']}
                            start={{ x: 1.1, y: 0.9 }}
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#14493E',
                                height: '100%',
                                width: '100%',
                            }}
                        >
                        </LinearGradient>   
                    </View>
                    <View style={{
                        padding: 20,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}>
                        
                        <View style={{
                            position: 'absolute',
                            top: -50,
                        }}>
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ANVmA23FZZhVYWmJ0kNrdzNiNqi0jDXK-BG5jtwbe6SDq4CpJ_VIDk7TNxsFP0UdWxs&usqp=CAU'}}
                                style={{ width: 80, height: 80, borderRadius: 50 }}
                            />
                        </View>
                        
                        

                        <Text style={{
                            color: '#fefefe',
                            marginTop: 30,
                            marginBottom: 4,
                            fontSize: 19,
                            textAlign: 'center',
                            fontFamily: 'mt-medium',
                        }}>Иван Иванов</Text>
                        <Text style={{
                            color: '#797979',
                            fontSize: 13,
                            textAlign: 'center',
                            fontFamily: 'mt-medium',
                        }}>Информационные системы и технологии</Text>
                        
                    </View>
                </View>
                
                <View style={{
                    borderRadius: 10,
                    backgroundColor: '#151515',
                    padding: 20,
                    marginHorizontal: 12
                }}>

                    <Text style={{
                        color: '#fefefe',
                        marginBottom: 20,
                        fontSize: 15,
                        fontFamily: 'mt-regular',
                    }}>Информация</Text>
                    
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginBottom: 10,
                    }}>
                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <Fontisto
                                name={'email'}
                                size={19}
                                color={'#797979'}
                            />
                            <Text style={{
                                color: '#797979',
                                fontSize: 13,
                                marginLeft: 10,
                                fontFamily: 'mt-regular',
                            }}>Email</Text>
                        </View>
                        
                        <Text style={{
                            color: '#fefefe',
                            fontSize: 13,
                            fontFamily: 'mt-light',
                        }}>test@mail.ru</Text>
                        
                    </View>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginBottom: 10,
                    }}>
                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <Feather
                                name={'phone'}
                                size={19}
                                color={'#797979'}
                            />
                            <Text style={{
                                color: '#797979',
                                fontSize: 13,
                                marginLeft: 10,
                                fontFamily: 'mt-regular',
                            }}>Телефон</Text>
                        </View>

                        <Text style={{
                            color: '#fefefe',
                            fontSize: 13,
                            fontFamily: 'mt-light',
                        }}>+7 (909) 652-45-56</Text>

                    </View>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginBottom: 10,
                    }}>
                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <Ionicons
                                name={'school-outline'}
                                size={19}
                                color={'#797979'}
                            />
                            <Text style={{
                                color: '#797979',
                                fontSize: 13,
                                marginLeft: 10,
                                fontFamily: 'mt-regular',
                            }}>Факультет</Text>
                        </View>

                        <Text style={{
                            color: '#fefefe',
                            fontSize: 13,
                            fontFamily: 'mt-light',
                        }}>Экономический</Text>

                    </View>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <Ionicons
                                name={'document-text-outline'}
                                size={19}
                                color={'#797979'}
                            />
                            <Text style={{
                                color: '#797979',
                                fontSize: 13,
                                marginLeft: 10,
                                fontFamily: 'mt-regular',
                            }}>Номер зачетной книжки</Text>
                        </View>

                        <Text style={{
                            color: '#fefefe',
                            fontSize: 13,
                            fontFamily: 'mt-light',
                        }}>21.7151.3.1.037</Text>

                    </View>
                    
                </View>
            </ScrollView>

            <Header name='Profile' navigation={navigation} />

        </Layout>
    )
}

export default Profile