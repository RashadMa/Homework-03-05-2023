import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Wishlist = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View style={styles.headerTextWrapper}>
        <Text style={styles.headerText}>Favorites</Text>
      </View>
      <View>
        <Image style={styles.cactus} source={require('../../../assets/cactus.png')} />
        <Image resizeMode='contain' style={styles.wishlist} source={require('../../../assets/wishlishkeko.png')} />
      </View>
      <View style={styles.bodyTextWrapper}>
        <Text style={styles.bodyText}>No favorites yet</Text>
        <Text style={styles.bodyDesc}>Hit the orange button down
          below to Create an order</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.button}>
          <Text style={styles.buttonText}>
            Start ordering
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  headerTextWrapper: {
    alignItems: 'center',
    marginTop: 25,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  cactus: {
    width: 50,
    height: 70,
    position: 'absolute',
    left: 85,
    top: 230,
  },
  wishlist: {
    width: 246,
    height: 352,
    position: 'absolute',
    right: 35,
    top: 100,
  },
  bodyTextWrapper: {
    alignItems: 'center',
    transform: [{ translateY: 430 }],
  },
  bodyText: {
    fontSize: 28,
    fontWeight: '600',
  },
  bodyDesc: {
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
    width: 218,
    color: '#9B9B9B',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#58C0EA',
    width: 224,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 17,
    fontWeight: '700',
  }

})