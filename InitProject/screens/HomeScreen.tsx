import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <>
    </>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //         <Tab.Screens>
    //               </Tab.Screens>
    //               </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})