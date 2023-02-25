import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Save from './Save'



const Tab=createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Save' component={Save}/>
       
    </Tab.Navigator>
  )
}

export default HomeScreen