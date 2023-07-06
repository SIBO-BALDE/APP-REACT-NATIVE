import { Box,Center,Text ,VStack,ScrollView,  HStack, Image, } from 'native-base';
import React from 'react';
import Buttone from '../Components/Buttone';
import { Ionicons } from '@expo/vector-icons'; 
import {FontAwesome } from '@expo/vector-icons'






const paymentMethodes =[

  {
    image:'https://res.cloudinary.com/dtquwiu3x/image/upload/v1688662810/wave_rkgak5.png',
    alt:'wave',
    icon:'Ionicons'
 },
 
  {
     image:'https://res.cloudinary.com/dtquwiu3x/image/upload/v1688662811/Orange_ahf69x.png',
     alt:'orange-money',
     icon:'fontAwesome'
  },

  {
    image:'https://res.cloudinary.com/dtquwiu3x/image/upload/v1688660876/Paypal1_ykuanw.png',
    alt:'paypal',
    icon:'fontAwesome'
 },
  
 
]

export default function PaymentScreen() {
  return (
    <Box flex={1} safeAreaTop bg='#520909' py={5}>
    {/* headers */}
    <Center pb={15}>
      <Text color='#ffff' fontSize={14} bold>
         PAYMENT METHOD      
         </Text>
    </Center>
    {/* SELECTION */}
    <Box h='full' bg='#F4F1E6' px={5}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <VStack space={6} mt={5} >
      {paymentMethodes.map((i,index)=>(
        <HStack 
        key={index}
        alignItems='center' 
        bg='#fff' px={3} 
        py={1} 
        justifyContent='space-between'
        rounded={10}>
          <Box>
            <Image source={{uri:i.image}}
            alt='paypal'
            resizeMode='contain'
            w={60}
            h={50}
            />
            
          </Box>
          {i.icon === 'Ionicons'? <Ionicons 
          name='checkmark-circle' 
          size={30} 
          color='#520909' />
          : <FontAwesome 
          name='circle-thin' 
          size={30} 
          color='#520909' />

        
        }
  
  
        </HStack>

      ))}
      <Buttone bg='#520909' color='#fff' mt={5}>
        CONTINUE
        </Buttone>
        <Text italic textAlign='center'>
          Payment methode is <Text bold>wave</Text> by default
        </Text>



      </VStack>
      </ScrollView>
        
    </Box>
   </Box>
  )
}
  