import { Center, FlatList, HStack, Pressable,Image,Box } from 'native-base';
import React from 'react';
import data from '../data'

export default function OrderIterm() {
    return (
        <FlatList 
        showsVerticalScrollIndicator={false} 
        data={data.products.slice(0,5)}
        keyExtractor={(item) =>item._id}
        renderItem={({item})=> (
        <Pressable>
            <Box mb={3}>
                <HStack 
                alignItems='center' 
                bg='#fff' 
                shadow={1} 
                rounded={10} 
                overflow='hidden'>

                    <Center w='25%' bg='##D3D3D3'>
                        <Image  
                        source={{uri:data.item.Image}}
                        alt={data.item.Name}
                        w='full'
                        h={24}
                        resizeMode='contain'
                        />
                    </Center>

                </HStack>
            </Box>
        </Pressable>
        ) 
        }
        /> 
    );
  }