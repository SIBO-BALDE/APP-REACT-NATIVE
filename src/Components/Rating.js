import { HStack } from 'native-base';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons'



export default function Rating() {
    const size= 8
    const color='#A16509'
    return <HStack space={0.4} mt={1} alignItems='center'>
        <FontAwesome 
        name={value>=1 ? 'start' : value >= 0.5 ?'star-half-o' : 'star-o'} 
        color={color} 
        size={size} 
        />

        <FontAwesome 
        name={value>=2 ? 'start' : value >= 1.5 ?'star-half-o' : 'star-o'} 
        color={color} 
        size={size} 
        />

        <FontAwesome 
        name={value>=3 ? 'start' : value >= 2.5 ?'star-half-o' : 'star-o'} 
        color={color} 
        size={size}
         />

        <FontAwesome 
        name={value>=4 ? 'start' : value >= 3.5 ?'star-half-o' : 'star-o'} 
        color={color} 
        size={size} 
        />

        <FontAwesome 
        name={value>=5 ? 'start' : value >= 4.5 ?'star-half-o' : 'star-o'} 
        color={color} 
        size={size} 
        />

        {text && (
        <Text  fontSize={12} ml={2}>
            {text}
        </Text>
        )

        }
    </HStack>
    
  }