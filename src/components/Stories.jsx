import React from 'react'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'
import {Ionicons} from "@expo/vector-icons";

const Stories = () => {
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
            
            
            <TextInput
                placeholderTextColor='#585858'
                style={{
                    height: 36,
                    marginTop: 16,
                    marginBottom: 20,
                    fontFamily: 'mt-medium',
                    padding: 12,
                    fontSize: 13,
                    backgroundColor: '#1f1f22',
                    color: '#585858',
                    borderRadius: 10,
                    marginHorizontal: 10,
                }}
                placeholder='Поиск'
            />
        </View> 
    )
}

export default Stories