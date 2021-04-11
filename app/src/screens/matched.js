import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Chip } from 'react-native-paper';



export default function Matched({route}) {
    const navigation = useNavigation();
    const { name, age, img1 } = route.params;
    const [img, setImg] = useState('');
    const [avatar, setAvatar] = useState('');
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
        R: require('../assets/fonts/m.ttf'),
        S: require('../assets/fonts/s.ttf'),

      });
      useEffect(() => {
          console.log(name,age, img1)
          setImg(img1);
        async function _getName() {
            try {
                const avatar = await AsyncStorage.getItem('@avatar')
                if(avatar !== null) {
                  console.log(avatar);
                  setAvatar(avatar);
                }
              } catch(e) {
                // error reading value
              }
            
        }
        _getName();
        console.log(img1);
      }, [avatar,img1])
     
      if (!fontLoaded) {
        return null;
      }
   
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/matcheswall.png')} style={{width:'100%', height:300, resizeMode:'contain'}}>
            
            <View style={{ marginTop: '20%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}>
               <TouchableOpacity><Icon name="chevron-left" type="entypo" size={30} color="#F14848" style={{alignSelf:'flex-start'}}></Icon>
               <Text style={{textAlign:'left', color:"#F14848",fontSize:30, fontFamily:'B', marginTop:'20%', marginLeft:'5%'}}>You matched with {name.toString()}!</Text></TouchableOpacity>
                </View>
                
            </View></ImageBackground>    
           <View style={{marginHorizontal:'2.5%', marginTop:'5%', width:'90%', alignSelf:'center', borderRadius:80}}>
               <Avatar.Image style={{backgroundColor:"#FFF"}} size={100} source={{uri:img.toString()}} style={{position:'absolute', zIndex:2, right:'15%', top:'20%'}}/>
                <Image source={require('../assets/matcheart.png')} style={{alignSelf:'center', marginTop:'20%'}}></Image>
                <Avatar.Image style={{backgroundColor:"#FFF"}} size={100} source={{uri:avatar}} style={{position:'absolute', zIndex:2, left:'15%', top:'20%'}}/>
               <View>
               <Text onPress={()=>navigation.navigate('Chat',{img1:img.toString(), name:name.toString()})} style={{textAlign:'center', color:"#5D4444",fontSize:17, fontFamily:'R', marginTop:'20%', marginLeft:'5%'}}>Send them a message within 24 hours to keep the match! 

Ask a question, complement their sense of humor or eco-friendliness!</Text>
               </View>
                
            </View>

            

            <View style={{flexDirection:'row', display:'flex', position:'absolute', bottom:20, marginHorizontal:'10%'}}>
                   <TouchableOpacity><Icon name="home" type="entypo" color="#F14848" style={{marginRight:'25%'}}></Icon></TouchableOpacity>
                   <TouchableOpacity><Icon name="chatbubble" type="ionicon" color="#F14848" style={{marginRight:'30%'}}></Icon></TouchableOpacity>
                   <TouchableOpacity><Icon name="user" type="font-awesome" color="#F14848" style={{marginRight:'25%'}}></Icon></TouchableOpacity>
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