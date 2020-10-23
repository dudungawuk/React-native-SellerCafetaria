/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createSwitchNavigator } from '@react-navigation/stack';
import App from '../../../App';
import { HomeScreen, Makanan,Detail } from '../../containers/pages';
import Profile from '../../containers/pages/Profile';

function Router() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
        headerShown: false,
        animationEnabled: false}}>
        <Stack.Screen name="Home" component={HomeScreen} headermode= "none" />
        <Stack.Screen name="Profile" component={Profile} headermode= "none" />
        <Stack.Screen name="Makanan" component={Makanan} headermode=" none" />
        <Stack.Screen name="Detail" component={Detail} headermode= "none" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Router;
