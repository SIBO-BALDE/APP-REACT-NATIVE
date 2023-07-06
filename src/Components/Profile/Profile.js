import {  Box, FormControl, Input, ScrollView, VStack } from 'native-base';
import React from 'react';
import Buttone from '../Buttone'


const Inputs =[
   {
      label:'USERNAME',
      type:'text',
   },
   {
      label:'EMAIL',
      type:'text',
   },
   {
      label:'NEW PASSWORD',
      type:'password',
   },
   {
      label:' CONFIRM PASSWORD',
      type:'password',
   },
]


export default function Profile() {
    return (
     <Box h='full'bg='#fff' px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
         <VStack space={10} mt={5} pb={10}>
            {
               Inputs.map((i,index)=>(
                  <FormControl key={index}>
                  <FormControl.Label
                   _text={{
                     fontSize:'12px',
                     fontWeight:'bold',
                      color:'#000',
                  }}
                  > {i.label} </FormControl.Label>
                  <Input
                  borderWidth={0.2}
                  bg='#F4F1E6'
                  py={3}
                  type={i.type}
                  color='#520909'
                  fontSize={20}
                  _focus={{bg:'#F4F1E6', 
                  borderColor:'#520909',
                  borderWidth:1
               }}
                  />
               </FormControl>
               ))
            }
            <Buttone bg='#520909' color='#fff'>UPDATE PROFILE</Buttone>
            
         </VStack>
        </ScrollView>
     </Box>
        
       
    );
  }