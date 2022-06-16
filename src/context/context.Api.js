// import  React, { createContext, useEffect, useMemo, useReducer } from 'react';
// import auth from '@react-native-firebase/auth';
// import { Authentication, RequestTab } from '../config/Route';
// import RequestSendingTab from "../Needy/Request"
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';


// const Stack = createStackNavigator();


// // const AuthContext = createContext();

// export default function Routes ({ navigation }) {
//   // const [state, dispatch] = useReducer(
//   //   (prevState, action) => {
//   //     switch (action.type) {
//   //       case 'SIGN_UP':
//   //         return {
//   //           ...prevState,
//   //           isSignout: false,
//   //           userToken: action.token,
//   //         };
//   //       case 'SIGN_IN':
//   //         return {
//   //           ...prevState,
//   //           isSignout: false,
//   //           userToken: action.token,
//   //         };
//   //       case 'SIGN_OUT':
//   //         return {
//   //           ...prevState,
//   //           isSignout: true,
//   //           userToken: null,
//   //         };
//   //     }
//   //   },
//   //   {
//   //     isLoading: true,
//   //     isSignout: false,
//   //     userToken: null,
//   //   }
//   // );
//   // let userToken;
// //  useEffect(() => {
// //     // Fetch the token from storage then navigate to our appropriate place
// //     const AuthAsync = async () => {
      

// //       try {
// //         userToken = auth().currentUser?.uid
// //       } catch (e) {
// //       console.log("User is not logged in","$$$$$$$$$",e)
// //     }

// //       // After restoring token, we may need to validate it in production apps

// //       // This will switch to the App screen or Auth screen and this loading
// //       // screen will be unmounted and thrown away.
// //       dispatch({ type: 'SIGN_UP', token: userToken });
// //     };

// //     AuthAsync();
// //   }, []);


//   return (
//     // <AuthContext.Provider value={authContext}>
//         <NavigationContainer>
//       <Stack.Navigator screenOptions={() => ({
//      headerShown: false,
//    })}>
//         {auth().currentUser == undefined ? (
//           <Stack.Screen name="Authentication" component={Authentication} />
//         ) : (
//           <Stack.Screen name="Request" component={RequestTab} />
//         )}
//       </Stack.Navigator>
//       </NavigationContainer>
//     // </AuthContext.Provider>
//   );
// }