import { Center, HStack, Modal, VStack, Text, Button } from 'native-base';
import React, { useState } from 'react';
import Buttone from './Buttone'
import { useNavigation } from '@react-navigation/native';



const  OrderInfos=[
  {
    title:'Products',
     prix:'25000',
     color:'black',
  },
  {
    title:'Shipping',
     prix:'20000',
     color:'black',
  },
  {
    title:'Tax',
     prix:'15000',
     color:'black',
  },
  {
    title:'Total Amount',
     prix:'60000',
     color:'main',
  },
]


export default function PlaceOrderModel() {

  const navigation =useNavigation()
  const [showModel,setShowModel]=useState(false)

    return (
      <Center>
        <Buttone 
        onPress={()=> 
         {
          navigation.navigate('Order');
          setShowModel(false);
        }}
        bg='#A16509'
        color='#fff'
        mt={5}> 
        SHOW TOTAL
        </Buttone>
        <Modal isOpen={showModel} onClose={() => setShowModel(false)}size="lg">
          <Modal.Content maxWidth={350}>
            <Modal.CloseButton />
          
          <Modal.Header>Order</Modal.Header> 
          <Modal.Body>
            <VStack space={7}>
              {OrderInfos.map((i, index)=>(

            <HStack 
              key={index}
              alignItems='center' 
              justifyContent='space-between'>
            <Text fontWeight='medium'>{i.title} </Text>
            <Text 
             color={i.color === 'main'? '#520909' : '#000'}
             bold >
             {i.prix}
             </Text>
             </HStack>
                ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button 
            flex={1} 
            bg='#520909' 
            h={45} 
            _text={{
              color:'#fff',
            }}
            onPress={()=> setShowModel(true)}
            _pressed={{
              bg:'#520909'
            }}
            > PLACE AN ORDER</Button>
          </Modal.Footer>
          </Modal.Content> 
        </Modal>
        
      </Center>
        
       
    );
  }