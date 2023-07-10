import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {  } from "native-base"
import React from "react"
import HomeScreen from '../Screen/HomeScreen'
import ShippingScreen from '../Screen/ShippingScreen'
import SingleProductScreen from '../Screen/SingleProduct'
import PaymentScreen from '../Screen/PaymentScreen'
import PlaceOrderScreen from '../Screen/PlaceOrderScreen'




const Stack = createNativeStackNavigator();

export default function StackNav() {
    return(
        <Stack.Navigator 
        initialRouteName='home' 
         screenOptions={{
          headerShown:false,
        }}
  
        >
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='Single' component={SingleProductScreen} />
        <Stack.Screen name='Shipping' component={ShippingScreen} />
        <Stack.Screen name='Checkout' component={PaymentScreen} />
        <Stack.Screen name='PlaceOrder' component={PlaceOrderScreen} />
        </Stack.Navigator>


        );
};
  