import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../Auth/SignIn';
import Signup from '../Auth/Signup';
import RequestSendingTab from '../Needy/Request';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import Card from '../Needy/Card';
import Search from '../Manager/Search';
import Scanner from '../Manager/Scanner';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


export const Authentication =()=>{
  return(
  <Tab.Navigator screenOptions={{
  tabBarLabelStyle: { fontSize: 22,padding:10 },
  tabBarStyle: { backgroundColor: 'black' },
  tabBarActiveTintColor:"#00F3FF",
  tabBarInactiveTintColor:"white",
  tabBarPosition:'top',

  }}>
  <Tab.Screen name="SignUp" component={Signup} />
  <Tab.Screen name="SignIn" component={SignIn} />
  </Tab.Navigator>
  )
}


export const RequestTab =()=>{
  return(
  <Tab.Navigator screenOptions={{
  tabBarLabelStyle: { fontSize: 19,padding:10 },
  tabBarStyle: { backgroundColor: 'black' },
  tabBarActiveTintColor:"#00F3FF",
  tabBarInactiveTintColor:"white",
  tabBarPosition:'top',

  }}>
  <Tab.Screen name="Send Request" component={RequestSendingTab} />
  <Tab.Screen name="Card" component={Card} />
  </Tab.Navigator>
  )
}



export const ManagerTab =()=>{
  return(
  <Tab.Navigator screenOptions={{
  tabBarLabelStyle: { fontSize: 19,padding:10 },
  tabBarStyle: { backgroundColor: 'black' },
  tabBarActiveTintColor:"#00F3FF",
  tabBarInactiveTintColor:"white",
  tabBarPosition:'top',

  }}>
      <Tab.Screen name="Qr Scanner" component={Scanner} />

  <Tab.Screen name="Check Request" component={Search} />
  </Tab.Navigator>
  )
}



  export  function Routing (){
    return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={() => ({
     headerShown: false,

   })}>

          <Stack.Screen name="Authentication" component={Authentication} />

          <Stack.Screen name='Manager'component={ManagerTab}/>

          <Stack.Screen name="Request" component={RequestTab} />


 </Stack.Navigator>
    </NavigationContainer> 
)  
}
  


