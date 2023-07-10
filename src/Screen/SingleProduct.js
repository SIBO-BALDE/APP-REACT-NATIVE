import { Box, HStack, Heading, ScrollView,Image, Text, useNativeBase, Spacer } from 'native-base';
import React, { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import Rating from '../Components/Rating'
import Buttone from '../Components/Buttone'
import { useNavigation } from '@react-navigation/native';




export default function SingleProduct({route}) {
  const [value,setValue] = useState(0);
  const navigation =useNavigation()

  const product = route.params

  return (
    <Box safeArea flex={1} bg='#ffff'>
    <ScrollView px={5} showsVerticalScrollIndicator={false}>
     <Image 
     source={{uri:product.Image}} 
     alt="Image" w="full" h={300}  resizeMode="contain"/>
     <Heading bold fontSize={15} isTruncated > {product.Name} </Heading>
     <Rating value ={product.rating} text={`${product.numReviews} reviews` } />
     <HStack space={2} alignItems="center" my={5}>
      {
        product.CountInStock > 0 ? (
          <NumericInput 
          value={value}  
          totalWidth={140} 
          totalHeight={30}
          iconSize={25}
          step={1}
          maxValue={product.CountInStock}
          minValue={0}
          borderColor='#D3D3D3'
          rounded
          textColor='#000'
          iconStyle='#fff'
          rightButtonBackgroundColor='#520909'
          leftButtonBackgroundColor='#520909'
          
          
          />):(
       <Heading bold  italic color='#f0f' fontSize={10}>
        out of stock
        </Heading>
          )}
      <Spacer />
      <Heading bold  italic color='	#000' fontSize={10}>
        {product.prix} FCFA
        </Heading>
      
      
     </HStack>
     <Text lineHeight={24} fontSize={12}>
      {product.description}

     </Text>
     <Buttone
     onPress={()=> navigation.navigate('Cart')}
      bg='#520909' 
      color='#fff' 
      mt={10}
      >Add to Cart</Buttone>
     {/* <Review /> */}
    </ScrollView>
   </Box>
  )
}