import { Box } from 'native-base';
import React from 'react';
import HomeSeach from '../Components/HomeSearch';
import HomeProducts from '../Components/HomeProducts';

export default function HomeScreen() {
  return (
    <Box flex={1} bg='#ffff' s>
    <HomeSeach />
    <HomeProducts />
    </Box>
  )
}