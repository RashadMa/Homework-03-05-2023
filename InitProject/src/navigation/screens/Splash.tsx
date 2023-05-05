import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Splash = () => {
      return (
            <SafeAreaView style={styles.container}>
                  <View style={styles.textWrapper}>
                        <Text style={styles.headerText}>Find Your</Text>
                        <Text style={styles.headerText}>Gadget</Text>
                  </View>
                  <View>
                        <Image style={styles.splash} source={require('./assets/splash.png')} />
                  </View>
                  <View >

                  </View>
                  <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.getStartedWrapper}>
                              <Text style={styles.getStarted}>Get Started</Text>
                        </TouchableOpacity>
                  </View>
            </SafeAreaView>
      )
}

export default Splash

const styles = StyleSheet.create({
      container: {
            backgroundColor: '#5956E9',
      },
      headerText: {
            fontWeight: "700",
            fontSize: 45,
            color: "white"
      },
      textWrapper: {
            margin: 30
      },
      splash: {
            width: 450,
            height: 450,
            alignSelf: "center",
            transform: [{ translateY: -100 }]
      },
      getStarted: {
            color: "#5956E9",
            fontWeight: "700",
            fontSize: 16,
            textAlign: "center",
      },
      getStartedWrapper: {
            backgroundColor: "#fff",
            width: 300,
            height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            transform: [{ translateY: -60 }],
            borderRadius: 10,
      },
      buttonWrapper: {
            justifyContent: "center",
            flexDirection: "row",
      }
})