import { SafeAreaView, ScrollView, StyleSheet, Text, View,TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCode from 'react-native-qrcode-svg';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const Card = ({navigation}) => {
  const [Data, setData] = useState([])
  const [value, setValue] = useState("No Request")

const userId=auth().currentUser?.uid;
  useEffect(() => {
    const subscriber = firestore()
      .collection('UsersRequest')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        console.log('User Request: ', documentSnapshot.data());
        if (documentSnapshot.data() == undefined) {
          setData(null)
          setValue("null")
        }else{
          setData([documentSnapshot.data()])
          setValue(documentSnapshot.data().User)
        }

      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  
  const signOut=()=>{
    auth()
   .signOut()
   .then(() => {ToastAndroid.show('User signed out!',ToastAndroid.LONG)
   navigation.replace("Authentication")
  //  DevSettings.reload()
   //  navigation.replace("Authentication")
  } ).catch((error)=>{
     if (error.code == "auth/no-current-user") {
       navigation.replace("Authentication")
     }
  })
  }


  return (
    <SafeAreaView>
    <ScrollView style={styles.sectionContainer}>
<View style={{padding:10}}>
  {/* <Text style={{fontSize:40,fontStyle:"italic",fontWeight:"bold",color:"black",paddingLeft:120}}>Card</Text> */}
</View>

<View style={{marginTop:10}}>


{
  Data == null ? (
    <>
    <View style={{elevation:10,margin:6}}>
    <View style={{borderWidth:5, borderColor:"green",backgroundColor:"white"}}>

      <Text style={{color:"green",fontSize:35,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10,textAlign:"center"}}>Khana Sab Kay Liye </Text>
    <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Name:-_______________</Text>
    <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Father Name:-_______________</Text>
    <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Income:-_______________</Text>
    <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Family Member:-_______________</Text>
    <Text style={{backgroundColor: 'white',color:"black",fontSize:17,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Cnic Number:-_______________</Text>
    <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Ration Type:-_______________</Text>
    <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Request Status:-_______________</Text>
    </View>
    </View>
      </>

    ):(

Data.map(({Name,FatherName,FamilyMember,CNIC,Income,RationType,Status}) => (
  <>
    <View style={{elevation:10,margin:6}}>
   <View style={{borderWidth:5, borderColor:"green",backgroundColor:"white"}}>

   <Text style={{color:"green",fontSize:35,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10,textAlign:"center"}}>Khana Sab Kay Liye </Text>
   <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Name:-{Name}</Text>
   <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Father Name:-{FatherName}</Text>
   <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Income:-{Income}</Text>
   <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Family Member:-{FamilyMember}</Text>
   <Text style={{backgroundColor: 'white',color:"black",fontSize:17,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Cnic Number:-{CNIC}</Text>
   <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Ration Type:-{RationType}</Text>
   <Text style={{backgroundColor: 'white',color:"black",fontSize:20,fontStyle:"italic",fontWeight:"bold",padding:10,marginLeft:10,marginRight:10}}>Request Status:-{Status}</Text>
   </View>
  </View>
  </>
          
  ))
  

  )
}


             


<View>
<View style={styles.TopView} >
      <QRCode
      value={value}
      size={250}
      color="black"
    />
        </View>
    <View style={{marginTop:20,marginBottom:20}}>
    <Text style={{backgroundcolor:"black",fontSize:20,color:"black",fontStyle:"italic",fontWeight:"bold",padding:8}}>SerialNumber:-</Text>
    <Text style={{textDecorationStyle:'double',textDecorationLine:"underline",backgroundcolor:"black",fontSize:19,color:"black",fontStyle:"italic",fontWeight:"bold",padding:8}}>{value}</Text>
    </View>
    </View>


    <TouchableOpacity
            onPress={signOut}
            style={{ backgroundColor: 'white', height: 50, margin: 20, borderRadius: 130, elevation: 10}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 12 }}>SignOut </Text>
          </TouchableOpacity>


    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Card

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
        paddingHorizontal: 15,
      },
      TopView:{
marginTop:35,
marginLeft:35

      }
})