import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { TextInput } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Search = ({navigation}) => {
    const [search, setSearch] = useState("")
    const [Data, setData] = useState(null)

      // const subscriber = 
  
      // Stop listening for updates when no longer required

 const CancelSearch=()=>{
 setSearch("")
  setData(null)
 }     



const SearchBar = async()=>{
  if (search != "") {
    console.log("SearchDATA",search)
    firestore()
      .collection('UsersRequest')
      .doc(search)
      .onSnapshot(documentSnapshot => {
        console.log('User Request: ', documentSnapshot.data());
        if (documentSnapshot.data() == undefined) {
          setData(null)
        }else{
          setData([documentSnapshot.data()])
        
        }

      });

  }
}


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
    <ScrollView>
    <View>
    <View style={{marginTop:50}}>
      <Text style={{color:"black",fontSize:25,textAlign:"center"}}>Enter Serial Number</Text>
      </View>

      <View style={{padding:10,marginTop:10}}>
{/* input field */}
            <TextInput
              onChangeText={text => setSearch(text)}
              placeholder="Search Serial Number"
              // label={"UserName"}
              value={search}
              // mode="flat"
              mode="outlined"
              activeOutlineColor={"black"}
              outlineColor={"black"}
              activeUnderlineColor={"black"}
              underlineColor={"black"}
              placeholderTextColor={"black"}
              keyboardType="name-phone-pad"
            selectionColor='lightblue'
              style={{ color:"black", fontSize: 20, fontStyle: "italic"}}
               
            />
         </View>
         <View style={{flexDirection:"row"}}>
         <TouchableOpacity
            onPress={SearchBar}
            style={{ backgroundColor: 'white', height: 50, elevation: 10,marginLeft:10, borderRadius:100,padding:10,marginTop:15}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center",  }}>Search Request </Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={CancelSearch}
            style={{ backgroundColor: 'white', height: 50, elevation: 10,marginLeft:10, borderRadius:100,padding:10,marginTop:15}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center",  }}>Cancel Search </Text>
          </TouchableOpacity>
          </View>
<View style={{padding:20}}>

</View>

          <View>
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
          <TouchableOpacity
            onPress={signOut}
            style={{ backgroundColor: 'white', height: 50, margin: 20, borderRadius: 130, elevation: 10}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 15 }}>SignOut </Text>
          </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Search

const styles = StyleSheet.create({})