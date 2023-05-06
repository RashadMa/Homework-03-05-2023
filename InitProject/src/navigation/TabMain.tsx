import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Wishlist from './screens/Wishlist';
import Profile from './screens/Profile';
import Cart from './screens/Cart';
import ProductStack from './stacks/ProductStack';


const Tab = createBottomTabNavigator();

const TabMain = () => {
      return (
            <>
                  <Tab.Navigator>
                        <Tab.Screen
                              name='homescreen'
                              component={ProductStack}
                              options={{
                                    headerShown: false,
                              }}
                        />
                        <Tab.Screen
                              name='wishlist'
                              component={Wishlist}
                              options={{
                                    headerShown: false
                              }} />
                        <Tab.Screen
                              name='profile'
                              component={Profile}
                              options={{
                                    headerShown: false
                              }} />
                        <Tab.Screen
                              name='cart'
                              component={Cart}
                              options={{
                                    headerShown: false
                              }} />

                  </Tab.Navigator>
            </>
      )
}

export default TabMain

const styles = StyleSheet.create({})