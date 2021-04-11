import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-paper';
import dishes from '../dishes.json';



export default function Dishes() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
        R: require('../assets/fonts/m.ttf'),
        S: require('../assets/fonts/s.ttf'),

      });
      const [dish, setDish] = useState(null);
      var [pointer, setPointer] = useState(0);
      useEffect(() => {
        setDish(dishes.dishes)
      }, [])
      const _setPointer = () => {
          if(pointer<dish.length){
          setPointer(pointer++);
          console.log(pointer);
          }
          else{
              setPointer(-1);
          }
      }
      if (!fontLoaded) {
        return null;
      }
   
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/foodbg.png')} style={{width:'100%', height:300, resizeMode:'contain'}}>
            
            <View style={{ marginTop: '20%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}>
               <TouchableOpacity><Icon name="chevron-left" type="entypo" size={30} color="#FF7B30"></Icon></TouchableOpacity>
                </View>
                <Text style={{textAlign:'justify', color:"#FF7B30",fontSize:25, fontFamily:'B', marginHorizontal:'5%', marginTop:'15%'}}>Explore Dishes </Text>
                <Text style={{textAlign:'left', color:"#FF7B30",fontSize:20, fontFamily:'R', marginHorizontal:'5%', marginTop:'0.5%'}}>curated dishes based on your preferences</Text>
            </View></ImageBackground>    
           <View style={{marginHorizontal:'2.5%', marginTop:'5%', width:'90%', alignSelf:'center', borderRadius:80}}>
                
               {pointer>=0 &&<ImageBackground source={require('../assets/foodwall.png')} style={{width:'100%', height:500, alignSelf:'center'}} imageStyle={{resizeMode:'contain'}}>
                   <View style={{borderRadius:40, marginTop:'5%', marginLeft:'5%'}}>
                   <View style={{marginHorizontal:'10%', marginTop:'5%', flexDirection:'row', display:'flex'}}>
                   <Avatar.Image style={{backgroundColor:"#FFF"}} size={50} source={{uri:dish[pointer].avatar}}/>
                   <View>
                   <Text style={{fontFamily:'B', fontSize:20, marginLeft:'5%', color:'#404868', marginBottom:'-7.5%'}}>{dish[pointer].name}</Text>
                   <Text style={{marginTop:'1%', fontFamily:'S', marginLeft:'5%', color:'#FF7B30'}}>{'\n'}{dish[pointer].restaurant}</Text></View>
                   </View>
                   <Image source={{uri:dish[pointer].dish}} style={{width:275, height:250, resizeMode:'contain', borderRadius:30, alignSelf:'center', marginTop:'5%', marginLeft:'-5%'}}></Image>
                   <View style={{alignSelf:'center', flexDirection:'row', display:'flex', marginTop:'5%'}}>
                       <TouchableOpacity onPress={()=>_setPointer()}><Image source={require('../assets/yesb.png')} style={{width:60, height:60, resizeMode:'contain'}}></Image></TouchableOpacity>
                       <TouchableOpacity onPress={()=>_setPointer()}><Image source={require('../assets/heartb.png')} style={{width:70, height:70, resizeMode:'contain'}}></Image></TouchableOpacity>
                       <TouchableOpacity onPress={()=>_setPointer()}><Image source={require('../assets/nob.png')} style={{width:60, height:60, resizeMode:'contain'}}></Image></TouchableOpacity>
                   </View></View>
               </ImageBackground>}
               {pointer==-1 &&
               <View><Text style={{fontFamily:'S', color:'#FF7B30', width:'80%',height:400, alignSelf:'center', fontSize:20, textAlign:'center', marginTop:'20%'}}>Sorry, you've reached the end of the list!</Text>
               <View style={{flexDirection:'row', display:'flex', position:'absolute', bottom:20, marginHorizontal:'10%'}}>
                   <TouchableOpacity><Icon name="home" type="entypo" color="#FF7B30" style={{marginRight:'25%'}} ></Icon></TouchableOpacity>
                   <TouchableOpacity><Icon name="chatbubble" type="ionicon" color="#FF7B30" style={{marginRight:'30%'}}></Icon></TouchableOpacity>
                   <TouchableOpacity><Icon name="user" type="font-awesome" color="#FF7B30" style={{marginRight:'25%'}}></Icon></TouchableOpacity>
               </View>
               </View>}
                
            </View>

            

          
        
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: 450,
        width: '100%',
        marginTop: '-10%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});