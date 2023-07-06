import React from 'react';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { View,Text } from 'native-base';
import Orders from './Orders';
import Profile from './Profile';
import { StyleSheet } from 'react-native';

const renderScene=SceneMap({
    first:Profile,
    second:Orders,
})
export default function Tabs() {
    const layout = useWindowDimensions()
    const [index,setIndex]=useState(0)
    const [routes]=useState([
        {
            key:'first',title:'PROFILE'
        },
        {
            key:'second',title:'ORDERS'
        }
    ]);
    const renderTabsBar = (props) =>{
        <TabBar {...props} 
        tabStyle={styles.tabStyle} 
        indicatorStyle={{backgroundColor:'#000'}}
        activeColor='#520909'
        inactiveColor='#ffff'
        renderLabel={({route,color}) =><Text style={{color,...styles.text}}> {route.title} </Text>}
        
        />
    }
    
    return (
      
          <TabView 
          navigationState={{index,routes}} 
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width:layout.width}}
          renderTabBar={renderTabsBar}
          />
       
    );
  }

  const styles=StyleSheet.create({
    tabStyle:{
        backgroundColor:'#000',

    },
    text:{
fontSize:13,
fontWeight:'bold',
    },
  })