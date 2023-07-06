import React from 'react';
import {NativeBaseProvider} from 'native-base'
import  ProfileScreen from './src/Screen/ProfileScreen';


export default function App() {
  return (
    <NativeBaseProvider>
     <ProfileScreen /> 
    {/* <HomeScreen /> */}
  </NativeBaseProvider>
      
     
  );
}