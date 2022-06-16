import React, { useEffect, useState } from "react"
import { Alert, DevSettings, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import { Checkbox } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
// import { AuthContext } from "./context/auth";

function Signup({navigation}) {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ErrMsg, setErrMsg] = useState("")
  const [isChecked, setChecked] = useState(true);
  const [Err, setErr] = useState("")

  const [User, setUser] = useState()
  const [initializing, setInitializing] = useState(true);
  // const navigation = useNavigation(); 

  // let userId=auth().currentUser?.uid
  // const navigation = useNavigation(); 

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }


  useEffect(() => {

      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!User) {
    navigation.navigate("Authentication")
//       setType("Authentication")
//       console.log(type)

   }else{
    // navigation.replace("Request")
    firestore()
      .collection('Users')
      .doc(User.uid)
      .onSnapshot(documentSnapshot => {
        console.log('User: ', documentSnapshot.data());
        if (documentSnapshot.data() == undefined) {
          setUser(undefined)
          console.info(documentSnapshot.data())
        }else{
            //  setUser(documentSnapshot.data())
            //  console.info(documentSnapshot.data())
        
           if(documentSnapshot.data().Type == "Needy"){
               navigation.navigate("Request")
              //  Request
            // Alert.alert("Needy Here")
            //   setType("Request")
            //   console.log(type)

      
            
          
          }else if(documentSnapshot.data().Type == "Manager") {
            // Alert.alert("Manager Here")
            navigation.navigate("Manager")
            // setType("Manager")
            // console.log(type)

           }
        
          }

      });
  }











// const {register} = useContext(AuthContext)

  const handleSignup = async () => {
    if (email !== "" && password !== "" && userName !== "") {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
      if (reg.test(email) === true) {
        if (pass.test(password) === true) {
          //  await createUserWithEmailAndPassword(auth,email, password)
         await auth()
            .createUserWithEmailAndPassword(email,password) 
            .then(async(userCredential) => {
             let user = userCredential.user
             await firestore()
             .collection('Users')
             .doc(user.uid)
             .set({ Name: userName,
               Email:user.email,
               Uid:user.uid,
               Type: "Needy"})
             .then(() => {
              ToastAndroid.show('User added!',ToastAndroid.LONG);
               ToastAndroid.show('User account created & signed in!',ToastAndroid.LONG)
              //  DevSettings.reload()
               navigation.replace("Request")

              //  navigation.replace('Req') 
             }).catch( e=>{
                 console.error(e)
             })
                
                  // let user = userCredential.uis
                  // let userInfo = {
                  //   Name: userName,
                  //   Email:auth().currentUser.email,
                  //   Uid:auth().currentUser.uid,
                  //   Type: "Needy"
                  // }
                  // setDoc(doc(db, "Users",user.uid), userInfo)



                    //    .then(
                    //      async()=>{
                    //        Alert.alert("Successfully Registered", ToastAndroid.SHORT);

                    //     //    navigation.navigate('NeedyHome')
                    //      }
                    //    )
                    // .catch(
                    //   function (error) {
                    //     setErr(error)
                    //   }
                    // )



             
            }) .catch(error => {
              if (error.code == 'auth/email-already-in-use') {
                ToastAndroid.show('That email address is already in use!',ToastAndroid.LONG)
              }else if (error.code == 'auth/invalid-email') {
                ToastAndroid.show('That email address is invalid!',ToastAndroid.LONG);
              }else{
                Alert.alert(error);
              }

            })



        } else {
          setErrMsg("Password must be between 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
          setTimeout(() => {
            setErrMsg("")
          }, 6000);
        }
      } else {
        Alert.alert("Error","Email is address is invalid!");

      }
    } else {
      Alert.alert("Presence Error","Fill all the Field!");

    }



  }
  return (
    <SafeAreaView >
      <ScrollView style={styles.sectionContainer}>
        {/* <SafeAreaView style={{backgroundColor:"black"}}> */}
        <View style={styles.container}>

        <View style={{alignItems:"center",alignContent:"center"}}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 30,padding:30 }}>Sign Up</Text>
            </View>
          <View>

            <TextInput
              onChangeText={text => setUserName(text)}
              placeholder="UserName"
              // label={"UserName"}
              value={userName}
              // mode="flat"
              mode="outlined"
              activeOutlineColor={"black"}
              outlineColor={"black"}
              activeUnderlineColor={"black"}
              underlineColor={"black"}
              placeholderTextColor={"black"}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              style={{ color:"black", fontSize: 20, fontStyle: "italic"}}
               
            />
          </View>
          <View style={{padding:10}}>
            
          </View>
          <View>
            <TextInput
              onChangeText={text => setEmail(text)}
              value={email}
              mode="outlined"
              activeOutlineColor={"black"}
              outlineColor={"black"}
              activeUnderlineColor={"black"}
              underlineColor={"black"}
              // label="Email"
              placeholder="Email"
              placeholderTextColor={"black"}
              keyboardType="email-address"
              selectionColor="lightblue"
              style={{ color: "black", fontSize: 20, fontStyle: "italic" }}
            />
          </View>
          <View style={{padding:10}}>
            
          </View>
          <View>
            {/* {isChecked===false?setSecurity(true):true} */}
            <TextInput
              onChangeText={text => setPassword(text)}
              value={password}
              mode="outlined"
              // label="Password"
              placeholder="Password"
              placeholderTextColor={"black"}
              activeOutlineColor={"black"}
              outlineColor={"black"}
              activeUnderlineColor={"black"}
              underlineColor={"black"}
              // secureTextEntry={isChecked}
              secureTextEntry={isChecked}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              style={{ color: "black", fontSize: 20, fontStyle: "italic" }}
            />

          </View>
          <View style={{padding:10}}>
            
          </View>
          {ErrMsg ? <View>
            <Text style={{ color: "red", fontSize: 14 }}>{ErrMsg}</Text>
          </View> : null}

          <View style={styles.section}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={"black"} />
            {/* <Checkbox
      status={isChecked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!isChecked);
      }}
    /> */}
            <Text style={{color:"black", fontSize:20}}>Hide Password</Text>
          </View>
          {Err ? <View>
            <Text style={{ color: "red", fontSize: 14 }}>{Err}</Text>
          </View> : null}
          <TouchableOpacity
            onPress={handleSignup}
            style={{ backgroundColor: 'white', height: 50, margin: 20, borderRadius: 130, top: 40, elevation: 10}}>
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 12 }}>Register </Text>
          </TouchableOpacity>




          {/*  */}
          <View style={{padding:15}}>
            
          </View>
          {/* <TouchableOpacity
            style={{height: 50, margin: 20, borderRadius: 130, top: 40, bottom: -40 }}>
            
          </TouchableOpacity> */}
          {/* <View style={styles.section}> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: 'blue' ,height:50 ,margin:20, borderRadius:130 }}><Text style={{fontSize: 20, color: '#fff',textAlign:"center",marginTop:12}}>Already Register Click Here!</Text></TouchableOpacity> */}
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  container: {
    marginTop: 20,

  },
  input: {
    height: 70,
    margin: 12,
    borderWidth: 6,
    // padding: 10,
    borderRadius: 60,
    padding: 16
  },
  inputs: {
    // height: 70,
    // margin: 12,
    // borderWidth: 6,
    // // padding: 10,
    // borderRadius:60,
    padding: 16
  },
  checkbox: {
    margin: 8,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 14,
    top: 20

  },
  section2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
    marginLeft: 70,
    marginRight: 20
  },
  sectionContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
  },
});



export default Signup