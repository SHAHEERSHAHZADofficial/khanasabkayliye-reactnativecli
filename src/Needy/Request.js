// import React,{useState} from 'react'
// import { View,TextInput,StyleSheet,ScrollView,Image,TouchableOpacity,Text ,Picker,SafeAreaView,ToastAndroid} from 'react-native'
// import ImagePicker from 'react-native-image-crop-picker';
// // import ModalDropdown from 'react-native-modal-dropdown';
// import {
//     Dropdown
//   } from 'sharingan-rn-modal-dropdown';
// const RequestSendingTab = () => {
//     const [name, setName] = useState("")
//     const [fatherName, setFatherName] = useState("")
//     const [familyMember, setFamilyMember] = useState("")
//     const [cnic, setCNIC] = useState()
//     const [income, setIncome] = useState("")
//     const [image, setImage] = useState(null);
//     const [secondImage, setSecondImage] = useState(null);
//     const [ration, setRation] = useState("")
//     const [Err, setErr] = useState("")

//     const sendRequest = async () => {
//         if(name!==""&&fatherName!==""&&familyMember!==""&&cnic!==""&&income!==""&&ration!==""&&image!==null&&secondImage!==null){
//           ToastAndroid.show("Please wait Your Request is processing", ToastAndroid.LONG);

//           let storageRef = ref(storage,`${"CNIC"}/${cnic*2}`)
//           const img = await fetch(image);
//           const byte = await img.blob();
//           await uploadBytes(storageRef, byte); //upload images
//           let FrontPicOfCnic =  await getDownloadURL(ref(storage, storageRef))
        
//           let Ref = ref(storage,`${"CNIC"}/${cnic*3}`)
//           const images = await fetch(secondImage);
//           const bytes = await images.blob();
//           await uploadBytes(Ref, bytes); //upload images
//           let BackPicOfCnic =  await getDownloadURL(ref(storage, Ref))
        
        
        
//           let Requestobj = {
//             Name:name,
//             FatherName:fatherName,
//             CNIC:cnic,
//             FamilyMember:familyMember,
//             Income:income,
//             Ration:ration,
//             FrontPicOfCnic:FrontPicOfCnic,
//             BackPicOfCnic:BackPicOfCnic,
//             User:auth.currentUser?.uid,
//             Status:"Pending"
            
//         };
//             const RequestRef = doc(db,'UserRequest',auth.currentUser?.uid);
//             await setDoc(RequestRef,Requestobj).then(
//               ToastAndroid.show("Request Sended", ToastAndroid.LONG)
//             ).catch((error)=>{
//               setErr(error)
//             })    

//         }else{
//           ToastAndroid.show("Info Error","Fill All The Field To Continue", ToastAndroid.LONG);
//         }
//         }

//         const takePhotoFromCamera = () => {
//             ImagePicker.openCamera({
//               width: 1200,
//               height: 780,
//               cropping: true,
//             }).then((image) => {
//               console.log(image);
//               const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
//               setImage(imageUri);
//             });
//           };
        
//           const choosePhotoFromLibrary = () => {
//             ImagePicker.openPicker({
//                 multiple: true
//               }).then(images => {
//                 console.log(images);
//               });
//           };
        
//         //   let data = [{
//         //     value: 'Monthly',
//         //   }, {
//         //     value: 'Daily 1 time',
//         //   }, {
//         //     value: 'Daily 2 time',
//         //   }, 
//         //   {
//         //     value: 'Daily 3 time',
//         //   }];
//           const data = [
//             {
//               value: 'Monthly',
//               label: 'Monthly',
          
//             },
//             {
//               value: 'Daily 1 time',
//               label: 'Daily 1 time',
            
//             },
//             {
//               value: 'Daily 2 time',
//               label: 'Daily 2 time',
             
//             },
//             {
//               value: 'Daily 3 time',
//               label: 'Daily 3 time',
            
//             },
//           ];
          
//   return (
//     <SafeAreaView style={{flex:3}}>
//     <ScrollView style={{backgroundColor:"white"}}>
//     <View style={styles.container}>
//     <StatusBar style="dark"/>
//     <View style={styles.input}>
//     <TextInput
//             onChangeText={text => setName(text)}
//             value={name}
//             placeholder="Name"
//             keyboardType="name-phone-pad"
//     placeholderTextColor={"blue"} 
//     style={{color:"blue",fontSize:20,fontStyle:"italic",fontWeight:"bold"}}
//     /> 
//     </View>
//     <View style={styles.input}>
//     <TextInput
//             onChangeText={text => setFatherName(text)}
//             value={fatherName}
//             placeholder="Father Name"
//             keyboardType="name-phone-pad"
//     placeholderTextColor={"blue"} 
//     style={{color:"blue",fontSize:20,fontStyle:"italic",fontWeight:"bold"}}
//     /> 
//     </View>
//     <View style={styles.input}>
//     <TextInput
//             onChangeText={text => setFamilyMember(text)}
//             value={familyMember}
//             placeholder="Enter The Number of Family Member"
//             keyboardType="name-phone-pad"
//     placeholderTextColor={"blue"} 
//     style={{color:"blue",fontSize:15,fontStyle:"italic",fontWeight:"bold"}}
//     /> 
//     </View>
//     <View style={styles.input}>
//     <TextInput
//             onChangeText={text => setIncome(text)}
//             value={income}
//             placeholder="Enter Your Income"
//             keyboardType="name-phone-pad"
//     placeholderTextColor={"blue"} 
//     style={{color:"blue",fontSize:20,fontStyle:"italic",fontWeight:"bold"}}
//     /> 
//     </View>
//     <View style={styles.input}>
//     <TextInput
//             onChangeText={text => setCNIC(text)}
//             value={cnic}
//             placeholder="Enter CNIC Number with out space"
//             keyboardType="name-phone-pad"
//     placeholderTextColor={"blue"} 
//     style={{color:"blue",fontSize:15.5,fontStyle:"italic",fontWeight:"bold"}}
//     /> 
//     </View>
//     <View>
//     {/* <ModalDropdown style={styles.Dropdown} dropdownStyle="" options={['Monthly Ration', 'Daily 1 time',"Daily 2 time","Daily 3 time"]} defaultValue="Select Ration Type" 	/> */}
//     <Dropdown
//             label="Ration Type"
//             data={data}
//             // enableSearch
//             value={ration}
//             onChange={text=>setRation(text)}
//          textInputStyle={{backgroundColor:"white"}}
//           />
          
//     </View>
//          <TouchableOpacity onPress={pickImage}         
//           style={{ backgroundColor: 'blue' ,height:50 ,margin:20, borderRadius:130  }}>
//           <Text style={{ fontSize: 20, color: '#fff',textAlign:"center",marginTop:12  }}>Front cnic photo</Text>
//           </TouchableOpacity>
//           {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 ,marginLeft:60}} />}
    
//   {results? <Text style={{color:"red",fontSize:14}} >{results}</Text>:null}
    
//           <TouchableOpacity onPress={pickSecondImage}         
//         style={{ backgroundColor: 'blue' ,height:50 ,margin:20, borderRadius:130  }}>
//             <Text style={{ fontSize: 20, color: '#fff',textAlign:"center",marginTop:12  }}>Back cnic photo</Text>
//           </TouchableOpacity>
//           {secondImage && <Image source={{ uri: secondImage }} style={{ width: 200, height: 200,marginLeft:60 }} />} 
          

//           <Button icon="camera" mode="contained" color={"green"}  onPress={() => console.log('Pressed')}>
//     Press me
//   </Button>
//           <TouchableOpacity
//             onPress={sendRequest}
//             style={{ backgroundColor: 'blue' ,height:50 ,margin:20, borderRadius:130 ,fontWeight:"bold" }}>
//             <Text style={{ fontSize: 20, color: '#fff',textAlign:"center",marginTop:12 ,fontWeight:"bold" }}>Send Request</Text>
//           </TouchableOpacity>
//           {/* <TouchableOpacity
//             onPress={()=>{navigation.navigate("Card")}}
//             style={{ backgroundColor: 'blue' ,height:70 ,margin:20, borderRadius:130 ,fontWeight:"bold" }}>
//             <Text style={{ fontSize: 20, color: '#fff',textAlign:"center",marginTop:12 ,fontWeight:"bold" }}> Request AlReady Submitted  Click Here !</Text>
//           </TouchableOpacity> */}
//     </View>
//     </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default RequestSendingTab

// const styles = StyleSheet.create({
// container: {
//     marginTop:20,
//     backgroundColor: 'white',

//   },
//   Dropdown: {
//     flex: 1,
//     // backgroundColor: "red",
//     alignItems: 'center',
//     justifyContent: 'center',
     
// },
// input: {
//   height: 70,
//   margin: 12,
//   borderWidth: 6,
//   // padding: 10,
//   borderRadius:60,
//   padding:16
// },
// checkbox: {
//   margin: 8,
// },
// section: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginLeft:14

// },
// section2: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent:"space-evenly",
//   marginLeft:70,
//   marginRight:20
// }})










import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import ImagePickerCropper from 'react-native-image-crop-picker';
import {
    Dropdown
  } from 'sharingan-rn-modal-dropdown';
  import Icon from 'react-native-vector-icons/dist/FontAwesome';
  import storage from '@react-native-firebase/storage';


const Request = ({navigation}) => {
    const [Name, setName] = useState("")
    const [FatherName, setFatherName] = useState("")
    const [familyMember, setFamilyMember] = useState("")



    const [cnic, setCnic] = useState("")
    const [income, setIncome] = useState("")
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [secondImage, setSecondImage] = useState(null);
    const [secondImageUrl, setSecondImageUrl] = useState("");
    const [Ration, setRation] = useState("")
    const [Err, setErr] = useState("123")





const handleRequest = async ()=>{

    if (Name!="" && FatherName!="" && familyMember!="" && cnic!="" && income!="" && image!=null && secondImage!=null) {
        Alert.alert("Request is in process !"); 
      console.log("working on your Request")
        let user = auth().currentUser;

       await storage()
        .ref(cnic)
        .putFile(image.path)
        .then(  (snapshot) => {
          //You can check the image is now uploaded in the storage bucket
          console.log("HELLO WORLD first")
          console.log(`${snapshot} has been successfully uploaded.`);
          storage().ref(cnic).getDownloadURL().then((url)=>{
          console.log(url,"******************************************************************************")
          setImageUrl(url)
          setImageUrl(url)
          console.log("one image saved with url ",imageUrl)


           storage()
          .ref(cnic+"100")
          .putFile(secondImage.path)
          .then( async (snapshot) => {
            //You can check the image is now uploaded in the storage bucket
            console.log("HELLO WORLD Second")
            console.log(`${snapshot} has been successfully uploaded.`);
           
           await  storage().ref(cnic+"100").getDownloadURL().then((url2)=>{
            console.log(url,"******************************************************************************")
           setSecondImageUrl(url2)
           setSecondImageUrl(url2)
           console.log("one image saved with url ",secondImageUrl)
          //  if (imageUrl !== "" && secondImageUrl !== "") {
            firestore()
            .collection('UsersRequest')
            .doc(user.uid)
            .set({
                Name,
                FatherName,
                CNIC:cnic,
                Income:income,
                FamilyMember:familyMember,
                FrontPic:url,
                BackPic:url2,
                RationType:Ration,
                Status:"Pending",
                User:user.uid
            })
            .then(() => {
              Alert.alert('Request Sended!');
            }).catch( e=>{
              console.log("error","=====>",e,"<=====","error")
            })
            // } else {
            // console.log("iumage url not found")
            // Alert.alert("Press Send Request Again")
            // } 
                    })
  

          })
          .catch((e) => console.log('uploading image error => ', e));

         })

        })
        .catch((e) => console.log('uploading image error => ', e));
    } else {
        Alert.alert("Presence Alert"," * Fill All the field !")
    }

}



const PickImage = async ()=>{ 
    ImagePickerCropper.openPicker({
        cropping: true,
        freeStyleCropEnabled: true,
      })
        .then((images) => {
          console.log("hello")
          setImage(images);
          console.log(images.path)
        })
        .catch((error) => {
            console.log(error)
        });   
}



const SecondPickImage = ()=>{    
    ImagePickerCropper.openPicker({
       cropping: true,
        freeStyleCropEnabled: true,
      })
        .then((images) => {
          setSecondImage(images);
          console.log(images.path)
        })
        .catch((error) => {
            console.log(error)
        });   
    console.log("helloworld")
   
}



const data = [
    {
      value: 'Monthly',
      label: 'Monthly',
  
    },
    {
      value: 'Daily 1 time',
      label: 'Daily 1 time',
    
    },
    {
      value: 'Daily 2 time',
      label: 'Daily 2 time',
     
    },
    {
      value: 'Daily 3 time',
      label: 'Daily 3 time',
    
    },
  ];

  return (
    <SafeAreaView>
    <ScrollView style={styles.sectionContainer}>
    <View>
   
    <View style={{alignItems:"center",alignContent:"center"}}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 30,padding:40 }}>Send Request</Text>
            </View>
          
          {/* <View>
          {Err && <Text style={{color:"red",fontSize:30}} selectable={true} selectionColor="green" >{Err}</Text>}          

          </View> */}
          

          <View>
{/* input field */}
            <TextInput
              onChangeText={text => setName(text)}
              placeholder="Name"
              // label={"UserName"}
              value={Name}
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
            {/* Gaping */}
          </View>   

          <View>
{/* input field */}
            <TextInput
              onChangeText={text => setFatherName(text)}
              placeholder="FatherName"
              // label={"UserName"}
              value={FatherName}
              // mode="flat"
              mode="outlined"
              activeOutlineColor={"black"}
              outlineColor={"black"}
              activeUnderlineColor={"black"}
              underlineColor={"black"}
              placeholderTextColor={"black"}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              style={{ color:"black", fontSize: 20, fontStyle: "italic"  }}
               
            />
         </View>
        

         <View style={{padding:10}}>
            {/* Gaping */}
          </View>  


         <View>
{/* input field */}
            <TextInput
              onChangeText={text => setCnic(text)}
              placeholder="CNIC Number"
              // label={"UserName"}
              value={cnic}
              // mode="flat"
              mode="outlined"
              activeOutlineColor={"black"}
              outlineColor={"black"}
              activeUnderlineColor={"black"}
              underlineColor={"black"}
              placeholderTextColor={"black"}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              style={{ color:"black", fontSize: 20, fontStyle: "italic"  }}
               
            />
         </View>

         <View style={{padding:10}}>
            {/* Gaping */}
          </View>  


                  <View>
{/* input field */}
            <TextInput
              onChangeText={text => setIncome(text)}
              placeholder="Income"
              // label={"UserName"}
              value={income}
              // mode="flat"
              mode="outlined"
              activeOutlineColor={"black"}
              outlineColor={"black"}
              activeUnderlineColor={"black"}
              underlineColor={"black"}
              placeholderTextColor={"black"}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              style={{ color:"black", fontSize: 20, fontStyle: "italic"  }}
               
            />
         </View>

         <View style={{padding:10}}>
            {/* Gaping */}
          </View>  

                <View>
{/* input field */}
            <TextInput
              onChangeText={text => setFamilyMember(text)}
              placeholder="FamilyMembers"
              // label={"UserName"}
              value={familyMember}
              // mode="flat"
              mode="outlined"
              activeOutlineColor={"black"}
              outlineColor={"black"}
              activeUnderlineColor={"black"}
              underlineColor={"black"}
              placeholderTextColor={"black"}
              keyboardType="name-phone-pad"
              selectionColor="lightblue"
              style={{ color:"black", fontSize: 20, fontStyle: "italic"  }}
               
            />
         </View>       

         <View style={{padding:10}}> 
            {/* Gaping */}
          </View>   

<View>
     <Dropdown
            label="Ration Type"
            data={data}
            // enableSearch
            value={Ration}
            onChange={text=>setRation(text)}
         textInputStyle={{backgroundColor:"white"}}
        //  mainContainerStyle={{backgroundColor:"green"}}
         dropdownIcon={
            <Icon
              name="arrow-circle-o-down"
              size={30}
              color={"white"}
            />
        
          }

          />
</View>
         {/* <View style={{padding:5,marginLeft:39}}> 
            Gaping
            <Text style={{color:"green",fontSize:16}}>
            Select Front Images of Cnic Card
            </Text>
          </View>  */}



         <TouchableOpacity
            onPress={PickImage}
            style={{ backgroundColor: 'white', height: 50, margin: 20, borderRadius: 130,elevation: 10 }}>
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 12 }}>Front Image of Cnic</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image.path }} style={{ width: 200, height: 200 , alignItems:"center",alignContent:'center',justifyContent:'center' ,marginLeft:70 }} />}          
          
         {/* <View style={{padding:10}}>  */}
            {/* Gaping */}
          {/* </View>    */}


          {/* <View style={{padding:5,marginLeft:39}}> 
            <Text style={{color:"green",fontSize:16}}>
            Select Back Images of Cnic Card
            </Text>
          </View>  */}

         <TouchableOpacity
            onPress={SecondPickImage}
            style={{ backgroundColor: 'white', height: 50, margin: 20, borderRadius: 130,elevation: 10}}>
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 12 }}>Back Image of Cnic </Text>
          </TouchableOpacity>
          {secondImage && <Image source={{ uri: secondImage.path }} style={{ width: 200, height: 200 , alignItems:"center",alignContent:'center',justifyContent:'center' ,marginLeft:70 }} />}          

          <TouchableOpacity
            onPress={handleRequest}
            style={{ backgroundColor: 'white', height: 50, elevation: 10,marginTop:15, borderRadius:1000}}>
                 {/* top: 40, */}
            <Text style={{ fontSize: 20, color: '#000', textAlign: "center", marginTop: 12 }}>Send Request </Text>
          </TouchableOpacity>

          
          <View style={{padding:15}}>
            
            </View>

           </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default Request

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 5,
        paddingHorizontal: 20,
        marginHorizontal: 0,

      },
})