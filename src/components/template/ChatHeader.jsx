import React from 'react'
import {View, TextInput, Text, TouchableOpacity, ScrollView} from 'react-native'
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";

const ChatHeader = () => {
    return ( 
        <View>
            
            
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 20,
                paddingHorizontal: 12
            }}>
                
                <Text style={{
                    fontFamily: 'mt-medium',
                    color: '#e1e3e6',
                    fontSize: 18
                }}>Чаты</Text>

                <TouchableOpacity>
                    <Ionicons
                        name={'create-outline'}
                        size={24}
                        color={'#ffffff'}
                    />
                </TouchableOpacity>
                
            </View>
            
            
        
        </View>
    )
}

export default ChatHeader