import React from 'react';
import {Box,Heading, Input, Pressable, VStack} from 'native-base'
import {Image} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Button ,Text} from 'native-base';
import Colors from '../Color'


export default function LoginScreen() {
  return (
    <Box flex={1} bg="#fff" >
      <Image
      flex={1}
      alt="Logo"
      resizeMode="cover"
      size="lg"
      w="full"
      source={require('../../Images/cover.png')}
      />

   <Box 
   w="full"
   h="full"
   position="absolute"
   top="0"
   px="6"
   justifyContent="center"
   >
    <Heading style={{color:'#fff'}}>LOGIN</Heading>
    <VStack space={5} pt="6">
    {/* ** Email**** */}
    <Input 
    InputLeftElement={
      <MaterialIcons name="email" size={20} color="#D3D3D3" />
    }
    
    variant='underlined' placeholder='user@gmail.com'
    w='70%' color={'#D3D3D3'}
    pl={2}
    borderBottomColor={'#D3D3D3'} />
    {/* ** PASSWORD**** */}

    <Input 
    InputLeftElement={
    <Ionicons name="eye" size={24} color="#D3D3D3" />
    }
    variant='underlined' placeholder='********'
    w='70%' color={'#D3D3D3'}
    type='password'
    pl={2}
    borderBottomColor={'#D3D3D3'} 
    />
    </VStack>
    <Button
   _pressed={{
      bg:'#fff',
   }}
    my={30}   w="40%" 
    rounded={50} 
    bg={'#A16509'}
    >

      LOGIN
    </Button>
    <Pressable
       mt={4} >
       <Text color='#ffff' >SIGN UP</Text>
    </Pressable>
   </Box>
 </Box>

  );
}