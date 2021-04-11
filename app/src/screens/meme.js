import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-paper';
import memes from '../memes.json';



export default function Meme() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
        R: require('../assets/fonts/m.ttf'),
        S: require('../assets/fonts/s.ttf'),

      });
      const [meme, setMeme] = useState(null);
      var [pointer, setPointer] = useState(0);
      useEffect(() => {
        setMeme(memes.memes)
      }, [])
      const _setPointer = () => {
          if(pointer<meme.length-2){
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
            <ImageBackground source={require('../assets/memebg.png')} style={{width:'100%', height:300, resizeMode:'contain'}}>
            
            <View style={{ marginTop: '20%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}>
               <TouchableOpacity><Icon name="chevron-left" type="entypo" size={30} color="#6B81CF"></Icon></TouchableOpacity>
                </View>
                <Text style={{textAlign:'justify', color:"#6B81CF",fontSize:25, fontFamily:'B', marginHorizontal:'5%', marginTop:'15%'}}>Based Memes </Text>
                <Text style={{textAlign:'justify', color:"#6B81CF",fontSize:20, fontFamily:'R', marginHorizontal:'5%', marginTop:'0.5%'}}> curated dank memes in your area</Text>
            </View></ImageBackground>    
           <View style={{marginHorizontal:'2.5%', marginTop:'5%', width:'90%', alignSelf:'center', borderRadius:80}}>
                
               {pointer>=0 &&<ImageBackground source={require('../assets/memerect.png')} style={{width:'100%', height:500, alignSelf:'center'}} imageStyle={{resizeMode:'contain'}}>
                   <View style={{borderRadius:40, marginTop:'5%', marginLeft:'5%'}}>
                   <View style={{marginHorizontal:'10%', marginTop:'5%', flexDirection:'row', display:'flex'}}>
                   <Avatar.Image size={50} source={{uri:meme[pointer].avatar}}/>
                   <View>
                   <Text style={{fontFamily:'B', fontSize:20, marginLeft:'5%', color:'#404868', marginBottom:'-7.5%'}}>{meme[pointer].name},{meme[pointer].age}</Text>
                   <Text style={{marginTop:'1%', fontFamily:'S', marginLeft:'5%', color:'#6B81CF'}}>{'\n'}{meme[pointer].bio}</Text></View>
                   </View>
                   <Image source={{uri:meme[pointer].meme}} style={{width:275, height:300, resizeMode:'contain', borderRadius:30, alignSelf:'center', marginTop:'-5%', marginLeft:'-5%'}}></Image>
                   <View style={{alignSelf:'center', flexDirection:'row', display:'flex'}}>
                       <TouchableOpacity onPress={()=>_setPointer()}><Image source={require('../assets/yes.png')}></Image></TouchableOpacity>
                       <TouchableOpacity onPress={()=>_setPointer()}><Image source={require('../assets/love.png')}></Image></TouchableOpacity>
                       <TouchableOpacity onPress={()=>_setPointer()}><Image source={require('../assets/no.png')}></Image></TouchableOpacity>
                   </View></View>
               </ImageBackground>}
               {pointer==-1 &&
               <View><Text style={{fontFamily:'S', color:'#6B81CF', width:'80%', alignSelf:'center', fontSize:20, textAlign:'center', marginTop:'20%'}}>Sorry, that's all we have for now! Upload your memes maybe?</Text>
               
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