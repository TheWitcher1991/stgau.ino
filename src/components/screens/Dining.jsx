import React from 'react'
import {Image, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native'

import Layout from '../template/Layout'
import Header from '../template/Header'
import {Ionicons, SimpleLineIcons} from "@expo/vector-icons";

const categories = [
    {
        image:
            'https://www.pngall.com/wp-content/uploads/4/Mcdonalds-Ham-Burger-PNG.png',
        name: 'Combo Meal',
        active: true,
    },
    {
        image: 'https://assets.stickpng.com/images/5882482de81acb96424ffaac.png',
        name: 'Burgers & Sandwiches',
        active: false,
    },
    {
        image:
            'https://i.pinimg.com/originals/dd/bc/fb/ddbcfb6476b0de1a92eb269604183fdc.png',
        name: 'Happy Meal',
        active: false,
    },
    {
        image:
            'https://www.latestfreestuff.co.uk/wp-content/uploads/2018/01/free-mcdonalds-coca-cola-drink-e1515750985951.png',
        name: 'Beverages',
        active: false,
    },
    {
        image:
            'https://i.pinimg.com/originals/dd/bc/fb/ddbcfb6476b0de1a92eb269604183fdc.png',
        name: 'Chicken',
        active: false,
    },
    {
        image:
            'https://i.pinimg.com/originals/dd/bc/fb/ddbcfb6476b0de1a92eb269604183fdc.png',
        name: 'Snacks & Slides',
        active: false,
    },
]

const popular = [
    {
        image:
            'https://mcdonalds.ru/resize/-x1020/upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
        name: 'Big Mac',
        price: '40 руб.',
    },
    {
        image:
            'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04033439/product-double-filet-o-fish.png',
        name: 'Quarter',
        price: '100 руб.',
    },
    {
        image:
            'https://mcdonalds.ru/resize/-x1020/upload/iblock/3ab/0000_Cheeseburger_BB_1500x1500_min.png',
        name: 'Cheeseburger',
        price: '120 руб.',
    },
    {
        image:
            'https://d1nqx6es26drid.cloudfront.net/app/uploads/2019/07/05231615/Buttermilk-Crispy-Chicken.png',
        name: 'Crispy Chicken',
        price: '45 руб.',
    },
    {
        image:
            'https://i.pinimg.com/originals/dd/bc/fb/ddbcfb6476b0de1a92eb269604183fdc.png',
        name: 'Sausage Burrito',
        price: '80 руб.',
    },
    {
        image:
            'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04033439/product-double-filet-o-fish.png',
        name: 'Filet-o-Fish',
        price: '150 руб.',
    },
]

const Dining = ({ navigation }) => {
    return (
        <Layout>

            <ScrollView>
                
             

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
                    }}>Столовая</Text>

                    <TouchableOpacity>
                        <SimpleLineIcons
                            name={'basket-loaded'}
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

                <View style={{marginHorizontal:12}}>
                    <Text
                        style={{ fontFamily: 'mt-medium', fontSize: 24, fontWeight: '600', color: '#fefefe', marginBottom: 14 }}
                    >
                        Категории
                    </Text>

                    <ScrollView horizontal={true}>
                        {categories.map((cat, idx) => (
                            <View
                                key={`categories ${idx}`}
                                style={{
                                    marginRight: 20,
                                }}
                            >
                                <TouchableHighlight
                                    underlayColor={'#EE1C0E'}
                                    style={{
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                        paddingHorizontal: 16,
                                        paddingVertical: 8,
                                        backgroundColor: cat.active ? '#14493E' : '#151515',
                                    }}
                                >
                                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent:'center' }}>
                                        <Image
                                            source={{ uri: cat.image }}
                                            style={{ width: 40, height: 40 }}
                                        />
                                    </View>
                                </TouchableHighlight>
                            </View>
                        ))}
                    </ScrollView>
                    
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                       
                    </View>
                </View>
                
                <View style={{marginHorizontal:12}}>
                    <Text
                        style={{ fontFamily: 'mt-medium', fontSize: 24, fontWeight: '600', color: '#fefefe' }}
                    >
                        Популярное
                    </Text>
                    <View
                        style={{
                            marginTop: 14,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        {popular.map((product, idx) => (
                            <View
                                key={`popular ${idx}`}
                                style={{
                                    width: '30%',
                                    marginBottom: 20,
                                }}
                            >
                                <TouchableHighlight
                                    underlayColor={'#EE1C0E'}
                                    style={{
                                        paddingVertical: 12,
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        backgroundColor: '#151515',
                                    }}
                                >
                                    <View style={{ alignItems: 'center' }}>
                                        <Image
                                            source={{ uri: product.image }}
                                            style={{ width: 40, height: 40 }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                color: '#fefefe',
                                                marginTop: 10,
                                                fontFamily: 'mt-medium',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {product.name}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                color: '#147561FF',
                                                fontFamily: 'mt-medium',
                                                marginTop: 10,
                                                textAlign: 'center',
                                            }}
                                        >
                                            {product.price}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <Header name='Dining' navigation={navigation} />

        </Layout>
    )
}

export default Dining