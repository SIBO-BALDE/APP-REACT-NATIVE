import { Center, FlatList, HStack, Pressable,Image,Box, VStack ,Text, Button} from 'native-base';
import React from 'react';
import data from '../data'

export default function OrderIterm() {
    return (
        <FlatList 
        showsVerticalScrollIndicator={false} 
        data={data.products.slice(0,3)}
        keyExtractor={(item) =>item._id}
        renderItem={({item})=> (
        <Pressable>
            <Box mb={3} >
                <HStack 
                alignItems='center' 
                bg='#fff' 
                shadow={1} 
                rounded={10} 
                overflow='hidden'
               
                
                >
            
                    <Center w='25%' bg='##D3D3D3' >
                        <Image  
                        source={{uri:item.Image}}
                        alt={item.Name} 
                        w='full'
                        h={24}
                        resizeMode='contain'
                        />
                    </Center>
                    <VStack w='60%' px={2} >
                        <Text isTruncated color='#000' bold fontSize={14}>{item.Name} </Text>
                        <Text  color='#D3D3D3' bold  fontSize={14} mt={2}>{item.prix} FCFA</Text>
                    </VStack>
                    <Center>
                        <Button 
                        bg='#520909'
                        _pressed={{bg:'#520909'}} 
                        _text={{
                            color:'#fff',


                        }}>5</Button>
                    </Center>
                </HStack>
            </Box>
        </Pressable>
        ) 
        }
        /> 
    );
  }