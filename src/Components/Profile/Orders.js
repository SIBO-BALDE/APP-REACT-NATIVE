import {  Box, ScrollView, Pressable, HStack,Text,Button } from 'native-base';

export default function Orders() {
    return (
      
      <Box h='full'bg='#fff' pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
         {/* paid order */}
         <Pressable>
            <HStack
            space={4}
            justifyContent='space-between'
            alignItems='center'
            bg='#D3D3D3'
            py={5}
            px={2}
            
            >
               <Text fontSize={9} color='#0000FF' isTtruncated>
                  97654321670867541
               </Text>
               <Text fontSize={12} bold color='#000' isTtruncated>
                  PAID
               </Text>
               <Text fontSize={11} italic color='#000' isTtruncated>
                  Dec 12 2022
               </Text>
               <Button 
               px={7} 
               py={1.5} 
               rounded={50} 
               bg='#A16509'
               _text={{
                  color:'#fff'

               }}
               _pressed={{
                  bg:'#520909'

               }}
               >
                  10.000 FCFA
               </Button>

            </HStack>
         </Pressable>
       {/* paid order */}
       <Pressable>
            <HStack
            space={4}
            justifyContent='space-between'
            alignItems='center'
             bg='#FFA07A'
            py={5}
            px={2}
            
            >
               <Text fontSize={9} color='#FF0000' isTtruncated>
                  97654321670867541
               </Text>
               <Text fontSize={12} bold color='#000' isTtruncated>
                  NOT PAID
               </Text>
               <Text fontSize={11} italic color='#000' isTtruncated>
                  Jan 12 2021
               </Text>
               <Button 
               px={7} 
               py={1.5} 
               rounded={50} 
               bg='#FF0000'
               _text={{
                  color:'#fff'

               }}
               _pressed={{
                  bg:'#FF0000'

               }}
               >
                  9.000 FCFA
               </Button>

            </HStack>
         </Pressable>


      </ScrollView>
     </Box>
    );
  }