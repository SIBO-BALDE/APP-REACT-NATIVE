import { Box, Center,Text } from 'native-base';
import React from 'react';
import Buttone from './Buttone';
import {FontAwesome } from '@expo/vector-icons'



export default function CartEmpty() {
    return (
        <Box flex={1} >
        <Center h='90%' >
            <Center w={200} h={200} bg='#fff' rounded='full'>
                <FontAwesome name="shopping-basket" size={64} color='#520909' />
            </Center>
            <Text color='#520909' bold mt={5}>
                CART IS EMPTY
            </Text>
            <Buttone bg='#A16509' color='#ffff'>
            START SHOPPING
        </Buttone>
        </Center>
       
       </Box>
        
       
    );
  }