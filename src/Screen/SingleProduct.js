// import { Box, Button, HStack, Heading, ScrollView } from 'native-base';
// import React, { useState } from 'react';
// import{View,Text} from 'react-native'
// import NumericInput from 'react-native-numeric-input';
// import Review from '../Components/Review';


// const [value,setValue] = useState(0);

// export default function SingleProduct() {
//   return (
//     <Box safeArea flex={1} bg='#ffff'>
//     <ScrollView px={5} showsVerticalScrollIndicator={false}>
//      <Image 
//      source={require("../../Images/boucle.png")} 
//      alt="Image" w="full" h={300}  resizeMode="contain"/>
//      <Heading bold fontSize={15} isTruncated > Colier</Heading>
//      <Rating value ={4} />
//      <HStack space={2} alignItems="center" my={5}>
//       <NumericInput 
//       value={value}  
//       totalWidth={140} 
//       totalHeight={30}
//       iconSize={25}
//       step={1}
//       maxValue={15}
//       minValue={0}
//       borderColor='#D3D3D3'
//       rounded
//       textColor='#0000'
//       iconStyle={'#fff'}
//       rightButtonBackgroundColor='#520909'
//       leftButtonBackgroundColor='#520909'
      
//       />
//       <Spacer />
//       <Heading 
//       bold color='#0000' 
//       fontSize={19}>
//         10.000 FCFA
//         </Heading>
//      </HStack>
//      <Text lineHeight={24} fontSize={12}>
//      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
//      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
//      It has survived not only five centuries, but also the leap into 
//      electronic typesetting, remaining essentially unchanged.
//      </Text>
//      <Button bg='#520909' color='#fff' mt={10}>Add to Cart</Button>
//      <Review />
//     </ScrollView>
//    </Box>
//   )
// }