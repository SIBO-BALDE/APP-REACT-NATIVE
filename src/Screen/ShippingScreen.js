import { Box,Center,Text ,VStack,ScrollView, FormControl, Input} from 'native-base';
import React from 'react';
import Buttone from '../Components/Buttone';
import { useNavigation } from '@react-navigation/native';



const ShippingInputs =[
  {
     label:'ENTER CITY',
     type:'text',
  },
  {
     label:'ENTER COUNTRY',
     type:'text',
  },
  {
     label:'ENTER POSTAL CODE',
     type:'text',
  },
  {
     label:' ENTER ADRESS',
     type:'text',
  },
]

export default function ShippingScreen() {

  const navigation =useNavigation()

  return (
    <Box flex={1} safeAreaTop bg='#520909' py={5}>
    {/* headers */}
    <Center pb={15}>
      <Text color='#ffff' fontSize={14} bold>
        DELEVERY AT ADRESS
      </Text>
    </Center>
    {/* Inputs */}
    <Box h='full' bg='#fff' px={5}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <VStack space={6} mt={5} >
      {ShippingInputs.map((i,index)=>(
        <FormControl key={index}>
        <FormControl.Label
         _text={{
           fontSize:'12px',
           fontWeight:'bold',
           
           }}
        >
         {i.label}
        </FormControl.Label>
        <Input
                 borderWidth={0.2}
                 bg='#F4F1E6'
                 py={4}
                 type={i.type}
                 color='#520909'
                 fontSize={20}
                 _focus={{bg:'#F4F1E6', 
                 borderColor:'#520909',
                 borderWidth:1
              }}
                 />
        </FormControl>
      ))}
        <Buttone
        onPress={()=> navigation.navigate('Checkout')}
 
        bg='#520909' 
        color='#fff' mt={5}>CONTINUE</Buttone>

      </VStack>
      </ScrollView>
        
    </Box>
   </Box>
  )
}