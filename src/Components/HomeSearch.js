import { Box, HStack,Input } from "native-base";
import { Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";




// HStack  premet de creer des card en react native
// VStack aligne les éléments verticalement. 
//Column est également un alias pour VStack ,il facilite la création de button en react native
//Il s'agit d'un composant générique pour les besoins de mise en page de bas niveau en native base.
// C'est semblable d'un div en html

export default function HomeSeach() {
  const navigation =useNavigation()
    return (
      <HStack 
      space={3} 
      w='full'
       px={6} bg='#520909' 
       py={4} 
       alignItems='center' 
       safeAreaTop
       >
        <Input
         placeholder=" Men Women Childreen African Cloth..."  
         width='85%' 
         bg='#fff' 
         type='search' 
         variant="filled"
         height={12}
         borderwidth={0}
         _focus={{
          bg:'#ffff'
         }}
         />
        <Pressable ml={3} onPress={()=>navigation.navigate('Cart')}
>
           <FontAwesome name='shopping-basket' size={24} color='#ffff' />
           <Box 
           px={1} 
           rounded="full" 
           position="absolute" 
           top={-13} 
           left={2}
           bg='#FF0000'
           _text={{
            color:'#ffff',
            fontSize:'11px'
           }}
           >5</Box>
        </Pressable>
      </HStack>
        
       
    );
  }