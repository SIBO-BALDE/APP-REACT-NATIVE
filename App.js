import React from 'react';

import {NativeBaseProvider,StatusBar} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screen/LoginScreen'
import RegisterScreen from './src/Screen/RegisterScreen'
import CartScreen from './src/Screen/CartScreen'
import BottomNav from './src/Navigations/BottomNav';


export default function App() {
  const Stack =createNativeStackNavigator()
  return (
    <NativeBaseProvider>
      
     <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator 
      initialRouteName='Login' 
       screenOptions={{
        headerShown:false,
      }}

      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Cart' component={CartScreen} />
        <Stack.Screen name='Bottom' component={BottomNav} />
      </Stack.Navigator>
     </NavigationContainer>
  </NativeBaseProvider>
      
     
  );
}