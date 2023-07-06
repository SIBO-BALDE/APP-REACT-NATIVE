import { Box, Flex, Heading, Image, Pressable, ScrollView ,Text} from 'native-base';
import React from 'react';
import data from '../data'
import Rating from './Rating';


// HStack  premet de creer des card en react native
// VStack aligne les éléments verticalement. 
//Column est également un alias pour VStack ,il facilite la création de button en react native
//Il s'agit d'un composant générique pour les besoins de mise en page de bas niveau en native base.
// C'est semblable d'un div en html
export default function HomeProducts() {


  // constproducts = []
  return (
    <ScrollView    showsVerticalScrollIndicator={false} flex={1} >
      <Flex 
      flexWrap='wrap' 
      direction='row'
      justifyContent='space-between' 
      px={6}
      >
        { data.products?.map((product)=>{
           <Pressable 
            key={product._id} 
            w='47%' 
            bg='#A16509'
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow ="hidden"//  overflow : dépassement de contenu  et hidden: pour interdir ce depassement
      
            >

           <Image
             source={{uri:product.image}}
             alt={product.Name}
             w="full"
             h={24}
             resizeMode="contain"
             />
            <Box
            px={4}
            pt={1}
            >
            <Heading
             size='sm' bold >
             <Text fontSize={10} mt={1} isTrunccated w='full'>
              {product.Name}
              {product.prix}FCFA
              </Text>
              <Rating value={product.rating} />
            </Heading>
            </Box>
            </Pressable>
          })
        }
      </Flex>
    
    </ScrollView>
  )
}