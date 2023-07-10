import { Center, Heading, Text } from 'native-base';
import React from 'react';

export default function OrderInfo({icon,title,subTitle,text,success,danger}) {

    return (
        <Center 
        bg='#fff' 
        w={200} 
        py={2} 
        rounded={10} 
        shadow={4} 
        mb={2} 
        ml={5} 
        mr={1}
        px={4}>
            <Center bg='#520909'
             w={60} 
             h={60} 
             rounded='full'>
               {icon}
            </Center>
            <Heading 
            bold 
            fontSize={12} 
            isTruncated 
            mt={3} 
            mb={2}
            color='#000'
           
            > {title}
            </Heading>
            <Text fontSize={13} color='#000'>
                {subTitle}
            </Text>
            <Text fontSize={13}  textAlign='center' italic color='#000'>
                {text}
            </Text>
            {/* statut */}
            {success && (
                <Center py={2} mt={2} rounded={5} w='full' bg='#007FFF'>
                    <Text fontSize={13} color='#fff'>Paid on Jan 12 2021</Text>
                </Center>
            )}
            {danger && (
                <Center py={2} mt={2} rounded={5} w='full' bg='#FF0000'>
                    <Text fontSize={13} color='#fff'>Not Deliver</Text>
                </Center>
            )}
        </Center>
     
        
       
    );
  }