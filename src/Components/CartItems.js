import { Box , Center, HStack, Image, Pressable, Text, VStack,Button} from 'native-base';
import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import data from '../data';
// import Buttone from './Buttone';
import {FontAwesome } from '@expo/vector-icons'



const Swiper= ()=>(
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey={0}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={data.products}
    renderHiddenItem={renderHiddenIterms}
    renderItem={renderIterms}
    showsVerticalScrollIndicator={false} />
)

const renderIterms=(data)=>{
    return(
        <Pressable>
        <Box ml={6} mb={3}>
            <HStack 
            alignItems='center' 
            bg='#ffff' 
            shadow={1} 
            rounded={10} 
            overflow={'hidden'}

            >
            <Center w="25%" bg='#D3D3D3'>
                <Image 
                source={{uri:data.item.Image}} 
                alt={data.item.Name}
                w="full"
                h={24} 
                resizeMode="contain"
                
                />
               
                

            </Center>
            
            <VStack w='60%' px={2} space={3}>
                <Text isTruncated color='#0000' bold fontSize={14}>
                    {data.item.Name}
                </Text>
                <Text bold color='#0000'> {data.item.prix}FCFA </Text>

            </VStack>
            <Center>
                <Button 
                bg='#A16509' 
                _pressed={{bg:'#A16509'}}
                _text={{color:'#ffff'}}
                
                >
                    
                    5
                
                </Button>
            </Center>
            </HStack>
            
        </Box>
    </Pressable>
    )
}
const renderHiddenIterms=(data)=>{
    // console.log(data)
    return (
        <Pressable 
    w={50} 
    roundedTopRight={10} 
    roundedBottomRight={10} 
    h='88%'
    ml='auto' 
    justifyContent='center' 
    bg='#FF0000'>
        <Center  alignItems='center' space={2}>
            <FontAwesome  name="trash" size={24}
            alignItems='center' 
            bg='#ffff' 
            shadow={1} 
            rounded={10} 
            overflow={'hidden'}
          />
           
        </Center>
    </Pressable>
    )
 

}

export default function CartItems() {
    return (
      <Box mr={6}>
       <Swiper />
      </Box>
        
       
    );
  }