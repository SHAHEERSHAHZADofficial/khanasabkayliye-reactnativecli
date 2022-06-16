import React, { useContext, useState } from "react"
import { Alert, DevSettings, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import {  TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Checkbox from 'expo-checkbox';

function SignIn({navigation}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ErrMsg, setErrMsg] = useState("")
  const [isChecked, setChecked] = useState(true);


const handlePasswordReset= async ()=>{
  if (email !== "") {
  const users = await firestore()
.collection("Users")
.where("Email","==",email).get()
.then( async (data)=>{

console.log(data.docs[0]._data.Type)
  if (data.docs[0]._data.Type === "Needy") {
    await auth().sendPasswordResetEmail(email)
  .then(async() => {
    ToastAndroid.show("Password Reset Email is Sended",ToastAndroid.LONG)

  }).catch(error =>{
    Alert.alert(error)
  })

    // Alert.alert("Needy")

  } else {
    Alert.alert("You Are Manager And You cant Change Your PassWord")
  }
})
// .then( async ()=>{



//   // await auth().sendPasswordResetEmail(email)
//   // .then(async() => {
//   //   ToastAndroid.show("Password Reset Email is Sended",ToastAndroid.LONG)

//   // }).catch(error =>{
//   //   Alert.alert(error)
//   // })
//   Alert.alert("needy")  
// }).catch(()=>{
//    Alert.alert("You Are Manager And You cant Change Your PassWord")

// })



  }else{
    Alert.alert("Enter Email !")
  }


}
  const handleSignIn = async () => {
       if (email !== "" && password !== "" ) {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
       if (reg.test(email) === true) {
         if (pass.test(password) === true) {
          //  await createUserWithEmailAndPassword(auth,email, password)
         await auth()
             .signInWithEmailAndPassword(email,password) 
             .then(async(userCredential) => {
             let user = userCredential.user
             const users = await firestore().collection('Users').doc(user.uid).get();
             if (users.data().Type=="Needy"){
              ToastAndroid.show("Needy here",ToastAndroid.LONG)
              navigation.navigate("Request")
             }else if(users.data().Type=="Manager"){
             ToastAndroid.show("Manager Here",ToastAndroid.LONG)
             }
                



             
            }).catch(error => {
              if (error.code === 'auth/user-not-found') {
                Alert.alert("Error",'That email address is invalid!');
              }else if (error.code == "auth/wrong-password"){
                Alert.alert("Error","Password is incorrect!");
              }
            })



        } else {
          setErrMsg("Password must be between 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
          setTimeout(() => {
            setErrMsg("")
          }, 6000);
        }
      } else {
        Alert.alert("Email is address is invalid!");

      }
    } else {
      Alert.alert("Fill all the Field!");

    }



  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.sectionContainer}>
        {/* <SafeAreaView style={{backgroundColor:"black"}}> */}
        <View style={styles.container}>

             <View style={{alignItems:"center",alignContent:"center"}}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 30,padding:30 }}>Sign In</Text>
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
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              style={{  fontSize: 20, fontStyle: "italic" }}
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
              // keyboardAppearance="dark"
              selectionColor="lightblue"
              style={{fontSize: 20, fontStyle: "italic" }}
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
          {/* {Err ? <View>
            <Text style={{ color: "red", fontSize: 14 }}>{Err}</Text>
          </View> : null} */}



          <TouchableOpacity
            onPress={handleSignIn}
            style={{ backgroundColor: 'white', height: 50, margin: 20, borderRadius: 130, top: 40, elevation: 10 }}>
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 12 }}>Sign In </Text>
          </TouchableOpacity>

          <View style={{padding:15}}>
            
            </View>
 
            <TouchableOpacity
            onPress={handlePasswordReset}
            style={{ backgroundColor: 'white', height: 50, margin: 20, borderRadius: 130, top: 40, elevation: 10 }}>
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 12 }}>Forget Password </Text>
          </TouchableOpacity>
          <View style={{padding:15}}>
            
            </View>
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



export default SignIn