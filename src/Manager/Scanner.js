import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView, SafeAreaView, ToastAndroid,  } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import firestore from '@react-native-firebase/firestore';

export default function Scanner() {

const [qr, setqr] = useState([])
const [Data, setData] = useState(null)
const handleOnRead= async(e)=>{
 setqr(e.data)
 console.log(e.data)

  firestore()
 .collection('UsersRequest')
 .doc(e.data)
 .onSnapshot(documentSnapshot => {
   console.log('User Request: ', documentSnapshot.data());
   if (documentSnapshot.data() == undefined) {
     setData(null)
   }else{
     setData([documentSnapshot.data()])
   }

 });


}




  return (
    <SafeAreaView>
    <ScrollView>
      <View style={{margin:40,padding:5}}>
      <Text style={{color:"black",fontSize:30,textAlign:"center"}}>QR CODE SCANNER</Text>
      </View>

    <View style={styles.container}>

        <QRCodeScanner
        onRead={handleOnRead}
        reactivate={true}
        reactivateTimeout={1000}



/>


          <View style={{marginTop:70}}>
            <Text style={{color:"black",fontSize:20,textAlign:"center",margin:10}} selectable={true}>{qr}</Text>
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
          </View>
      







    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
marginTop:20
  },  centerText: {
    // flex: 1,
    fontSize: 18,
    padding: 30,
    color: 'black'
  },



});