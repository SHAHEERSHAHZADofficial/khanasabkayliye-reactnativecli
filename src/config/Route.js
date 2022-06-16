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
//     const [User, setUser] = useState()
//     const [initializing, setInitializing] = useState(true);
//     const navigation = useNavigation(); 

//     // let userId=auth().currentUser?.uid
//     // const navigation = useNavigation(); 

//     function onAuthStateChanged(user) {
//       setUser(user);
//       if (initializing) setInitializing(false);
//     }


//     useEffect(() => {

//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//     }, []);

//     if (initializing) return null;

//     if (!User) {
//       navigation.navigate("SignIn")
// //       setType("Authentication")
// //       console.log(type)
//       return(
//   <NavigationContainer>
//   <Stack.Navigator initialRouteName='Authentication' screenOptions={() => ({
//    headerShown: false,
//  })}>

//   <Stack.Screen name="Authentication" component={Authentication} />
//     {/* <Stack.Screen name="Request" component={RequestTab} />
//     <Stack.Screen name='Manager'component={ManagerTab}/> */}

// </Stack.Navigator>
//   </NavigationContainer> ) 
//      }else{
//       // navigation.replace("Request")
//       firestore()
//         .collection('Users')
//         .doc(User.uid)
//         .onSnapshot(documentSnapshot => {
//           console.log('User: ', documentSnapshot.data());
//           if (documentSnapshot.data() == undefined) {
//             setUser(undefined)
//             console.info(documentSnapshot.data())
//           }else{
//               //  setUser(documentSnapshot.data())
//               //  console.info(documentSnapshot.data())
          
//              if(documentSnapshot.data().Type == "Needy"){
//                  navigation.navigate("Request")
//                 //  Request
//               // Alert.alert("Needy Here")
//               //   setType("Request")
//               //   console.log(type)

//                return(


//                 <NavigationContainer>
//                 <Stack.Navigator initialRouteName='Request' screenOptions={() => ({
//                  headerShown: false,
//                })}>
              
//                 {/* <Stack.Screen name="Authentication" component={Authentication} /> */}
//                   <Stack.Screen name="Request" component={RequestTab} />
//               </Stack.Navigator>
//                 </NavigationContainer>
//                 )
              
            
//             }else if(documentSnapshot.data().Type == "Manager") {
//               // Alert.alert("Manager Here")
//               navigation.navigate("Manager")
//               // setType("Manager")
//               // console.log(type)

//               return(
                
//                 <NavigationContainer>
//                 <Stack.Navigator initialRouteName='Manager' screenOptions={() => ({
//                  headerShown: false,
//                })}>
              
//                 {/* <Stack.Screen name="Authentication" component={Authentication} /> */}
//                 <Stack.Screen name='Manager'component={ManagerTab}/>
//               </Stack.Navigator>
//                 </NavigationContainer>
//               )
//              }
          
//             }
  
//         });
//     }


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
  


