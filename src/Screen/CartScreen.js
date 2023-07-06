import { Box, Button, Center, HStack, ScrollView, Text } from 'native-base';
import React from 'react';
// import CartEmpty from '../Components/CartEmpty'
import CartItems from '../Components/CartItems';
import Buttone from '../Components/Buttone';

export default function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg='#F4F1E6'>
    <Center w='full' py={5}>
      <Text color='#000' fontSize={20} bold>Cart</Text>
    </Center>

    {/* <CartEmpty /> */}
    <ScrollView showsVerticalScrolIndicator={false}>
      <CartItems />
      <Center mt={5}>
        <HStack rounded={50} 
        justifyContent='space-between'
         bg='#ffff' shadow={2} w='90%' 
         pl={5} h={45} 
         alignItems='center'>
          <Text>Total</Text>
          <Button 
          px={10} 
          h={45} 
          rounded={50} 
          bg='#A16509'
          _text={{
            color:'#ffff',
            fontWeight:'semibold',
          }}
          _pressed={{
            bg:'#A16509',
          }}
          
          >
            356 FCFA
            
            </Button>
         </HStack>
      </Center>
      {/* Checkout */}
      <Center px={5}>
        <Buttone bg='#520909' color='#ffff' mt={10}>CHECKOUT</Buttone>
      </Center>
    </ScrollView>
   </Box>
  )
}