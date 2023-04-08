import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

const Dining = () => {
    return (
        <SafeAreaView style={styles.BasicStyle}>
            <Text>Столовая!</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create ({
    BasicStyle: {
        justifyContent: "top",
        alignItems: "left",
        flex: 1,
    },
    text: {
        color: 'red'
    }
})
export default Dining   