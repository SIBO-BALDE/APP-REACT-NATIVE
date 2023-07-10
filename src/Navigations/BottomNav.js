import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
// import HomeScreen from '../Screen/HomeScreen'
import ProfileScreen from '../Screen/ProfileScreen'
import CartScreen from '../Screen/CartScreen'
import { Center, Pressable } from 'native-base';
import { Entypo,AntDesign,FontAwesome,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import StackNav from './StackNav';





const Tab = createBottomTabNavigator()
const CustomTab=({children,onPress})=>(
<Pressable 
onPress={onPress} 
h={70} 
w={70} 
// _pressed={{bg:'#000'}}
rounded='full' 
bg='#520909'
top={-30}
shadow={2}
>
    {children}
</Pressable>
);


export default function BottomNav() {
    return(
        <Tab.Navigator 
         backBehavior='Main'
         initialRouteName='Main' 
         screenOptions={{
         tabBarShowLabel:false,
         tabBarStyle:{...styles.tab},
         headerShown:false,
         tabBarHideOnKeyboard:true,
        }}
        >
            <Tab.Screen 
            name='Main' 
            component={StackNav} 
            options={{
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <Entypo 
                            name='home' 
                            size={24} 
                            color='#520909' />
                            
                        ):(
                            <AntDesign 
                            name='home' 
                            size={24} 
                            color='#000'/>
                        )}

                        
                    </Center>
                )
            }}/>
            {/* CART */}
            <Tab.Screen 
            name='Cart' 
            component={CartScreen} 
            options={{
                tabBarButton:(props)=> <CustomTab {...props} />,
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <FontAwesome5 
                            name='shopping-basket' 
                            size={24} 
                            color='#fff' />
                            
                        ):(
                            <MaterialCommunityIcons 
                            name='shopping-outline' 
                            size={24} 
                            color='#fff'/>
                        )}

                        
                    </Center>
                )
            }}/>
            {/* Profile */}
            <Tab.Screen 
            name='Profile' 
            component={ProfileScreen} 
            options={{
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <FontAwesome 
                            name='user' 
                            size={24} 
                            color='#520909' />
                            
                        ):(
                            <AntDesign 
                            name='user' 
                            size={24} 
                            color='#000'/>
                        )}


                    </Center>
                )
            }}/>
        </Tab.Navigator>
    );

};
const styles=StyleSheet.create({
    tab:{
        elevation:0,
        backgroundColor:'#fff',
        height:60,
        paddingTop:5,
    }
})

    
