import { Box, Heading } from 'native-base';
import React from 'react';
import Message from '../Components/Message'

export default function Review() {
    return (
      <Box my={9}>
       <Heading bold fontSize={15} mb={2}>Review</Heading>
       <Box p={3} 
        bg='#D3D3D3'
        mt={5}
        rounded={5}
       >
        <Heading 
         fontSize={15} 
         color='#0000'>
            User Doe
        </Heading>
       <Rating value={4} />
       <Text mb={3} fontSize={10}>Jan 12 2022</Text>
       <Message 
       color='#0000' 
       bg='#ffff' 
       size={12} 
       children={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry s standard dummy text ever since the 1500"
      }
       />
       </Box>
      </Box>
        
       
    );
  }