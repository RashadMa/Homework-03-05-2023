import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import Splash from './Splash';


const Tab = createBottomTabNavigator();

const App = () => {
  return (<>
    <Splash />

    {/* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer> */}
  </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5956E9',

  },
  headerText: {
    fontWeight: "800"
  }
});
