import React from 'react';
import { Box, Center, Image, VStack } from 'native-base';
import Buttone from '../Components/Buttone';




export default function NotVerifyScreen() {
  return (
    <Box flex={1} bg='#520909' safeAreaTop>
     <Center w="full" h={250} >
      <Image source={require('../../Images/Shop.jpg')} 
       alt="logo" 
       size="lg"
       borderRadius={'50'}
      />
     </Center>
     <VStack space={5} px={5} alignItems="center">
     <Buttone bg='#A16509' color='#fff'>REGISTER</Buttone>
     <Buttone bg='#fff' color='#A16509'onPress={bg='#A16509'}>LOGIN</Buttone>
     </VStack>
    </Box>
   
  )
}