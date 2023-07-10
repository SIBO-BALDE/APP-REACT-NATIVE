import { Center, HStack, Modal, VStack, Text, Button, Pressable, Image } from 'native-base';
import React, { useState } from 'react';
import Buttone from './Buttone'
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


export default function OrderModel() {
  const [showModel,setShowModel]=useState(false)
  const URL='https://res.cloudinary.com/dtquwiu3x/image/upload/v1688660876/Paypal1_ykuanw.png'

    return (
      <Center>
        <Buttone 
        onPress={()=> setShowModel(true)} 
        bg='#A16509'
        color='#fff'
        mt={5}> 
        SHOW PAYMENT & TOTAL
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
            <Pressable 
            w='full'
            justifyContent='center' 
            bg='#fcb101' 
            h={45}
            rounded={2} 
            overflow='hidden'
            onPress={()=>setShowModel(false)}
            >
                <Image source={{uri:URL}} 
                alt='paypal'
                resizeMode='contain' 
                w='full'
                h={34}
                />
            </Pressable>
            <Button 
            mt={2} 
            w='full'
            bg='#000' 
            h={45} 
            _text={{
              color:'#fff',
            }}
            onPress={()=> setShowModel(false)}
            _pressed={{
              bg:'#000'
            }}
            > PLACE AN ORDER</Button>
          </Modal.Footer>
          </Modal.Content> 
        </Modal>
        
      </Center>
        
       
    );
  }