import { Center, Heading, Image,Text } from 'native-base';
import React from 'react';
import Tabs from '../Components/Profile/Tabs';

export default function ProfileScreen() {
  return (
    <>
    <Center bg='#520909' pt={10} pb={6}>
      <Image source={{uri:"https://res.cloudinary.com/dtquwiu3x/image/upload/v1688572912/contacts_h2ug9o.png"}}
      alt='profile'
      w={24}
      h={24}
      resizeMode='cover'
      />
      <Heading bold fontSize={15} isTruncated my={2} color='#ffff'> Admin Doe</Heading>
      <Text italic fontSize={10} color='#fff'>joined Dec 12 2022</Text>

    </Center>
    <Tabs />
   </>
  )
}