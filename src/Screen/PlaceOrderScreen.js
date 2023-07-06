import { Heading, ScrollView } from 'native-base';
import React from 'react';
import{Box} from 'native-base'
import {FontAwesome,FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 




import OrderInfo from '../Components/Profile/OrderInfo';
import OrderIterm from '../Components/OrderIterm';
import PlaceOrderModel from '../Components/PlaceOrderModel';

export default function PlaceOrderScreen() {
  return (
    <Box flex={1} safeAreaTop bg='#F4F1E6'pt={6}>
    <Box>
      <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}>
        <OrderInfo 
        title='CUSTOMER' 
        subTitle='Admin SIBO BALDE'
        text='admin@example.com'
        icon={<FontAwesome name='user' size={30} color='#fff' />}
        
        />
        <OrderInfo 
        title='SHIPPING INFO' 
        subTitle='Shipping: SENEGAL'
        text='Pay Method: Wave'
        icon={<FontAwesome5 name='shipping-fast' size={30} color='#fff' />}
        
        />
        <OrderInfo 
        title='DELIVER TO' 
        subTitle='Address:'
        text='Dakar, Boulevard Lamine Gueye,APPT 221'
        icon={<Ionicons name='location-sharp' size={30} color='#fff' />}
        
        />
      </ScrollView>
    </Box>
    {/* order Iterm */}
    <Box px={6} flex={1} pb={3}>
      <Heading bold fontSize={15} isTruncated my={4}>
       PRODUCTS
      </Heading>
      <OrderIterm />
      {/* TOTAL */}
      <PlaceOrderModel />


    </Box>
   </Box>
  )
}