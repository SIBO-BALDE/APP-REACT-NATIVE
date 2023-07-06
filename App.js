import React from 'react';
import {NativeBaseProvider} from 'native-base'
import  PlaceOrderScreen from './src/Screen/PlaceOrderScreen';


export default function App() {
  return (
    <NativeBaseProvider>
     <PlaceOrderScreen /> 
    {/* <HomeScreen /> */}
  </NativeBaseProvider>
      
     
  );
}