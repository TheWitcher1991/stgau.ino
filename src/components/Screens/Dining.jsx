import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

//const image_dining = {'assets/dining_room_zoom.png'}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });
  
  const DisplayAnImageWithStyle = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={require('./assets/green_tea.png')}
        />
      </View>
    );
  };

const Dining = () => {
    return (
        //<SafeAreaView style={dining_styles.container}>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Столовая</Text>
        </SafeAreaView>
    )
}

//<ImageBackground source={image_dining} resizeMode="cover" style={styles.image}>
//</ImageBackground>

const dining_styles = Style.Sheet.create({
    container: {
        flex: 1,
        backgroundColor: 'center', 
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Dining