import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Chip } from 'react-native-paper';
import matches from '../matches.json';



export default function Match({route}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
        R: require('../assets/fonts/m.ttf'),
        S: require('../assets/fonts/s.ttf'),

      });
      const [match, setMatch] = useState(null);
      var [pointer, setPointer] = useState(0);
      useEffect(() => {
        setMatch(matches.matches)
      }, [])
      const _setPointer = () => {
          if(pointer<match.length){
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
            <ImageBackground source={require('../assets/matchbg.png')} style={{width:'100%', height:300, resizeMode:'contain'}}>
            
            <View style={{ marginTop: '20%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}>
               <TouchableOpacity><Icon name="chevron-left" type="entypo" size={30} color="#F14848"></Icon></TouchableOpacity>
                </View>
                <Text style={{textAlign:'justify', color:"#F14848",fontSize:30, fontFamily:'B', marginHorizontal:'5%', marginTop:'15%'}}>Find Matches </Text>
            </View></ImageBackground>    
           <View style={{marginHorizontal:'2.5%', marginTop:'5%', width:'90%', alignSelf:'center', borderRadius:80}}>
                
               {pointer>=0 &&<ImageBackground source={require('../assets/matchwall.png')} style={{width:'100%', height:500, alignSelf:'center'}} imageStyle={{resizeMode:'contain'}}>
                  <View style={{borderRadius:40, marginTop:'5%', marginLeft:'5%'}}>
                   <View style={{marginHorizontal:'10%', marginTop:'5%', flexDirection:'row', display:'flex'}}>
                   <Avatar.Image style={{backgroundColor:"#FFF"}} size={50} source={{uri:match[pointer].avatar}}/>
                   <View>
                   <Text style={{fontFamily:'B', fontSize:20, marginLeft:'5%', color:'#404868', marginBottom:'-7.5%'}}>{match[pointer].name}, {match[pointer].age}</Text>
                   <Text style={{marginTop:'1%', fontFamily:'S', marginLeft:'5%', color:'#F14848'}}>{'\n'}{match[pointer].bio}</Text></View>
                   </View>
                <View style={{height:250}}>
                <ScrollView  style={{paddingBottom:'1.5%'}} showsVerticalScrollIndicator={false}>
                   <Image source={{uri:match[pointer].avatar}} style={{width:275, height:250, resizeMode:'contain', borderRadius:30, alignSelf:'center', marginTop:'5%', marginLeft:'-5%'}}></Image>
                   <View style={{width:'75%', backgroundColor:'#FFF6F6', borderRadius:20, alignSelf:'center', marginLeft:'-5%'}}>
                       <Text style={{ color:'#F46868', fontFamily:'B', marginLeft:'5%', marginTop:'5%'}}>FootprintConnect Score:</Text>
                       <Text style={{ color:'#5D4444', fontFamily:'B', fontSize:50, marginLeft:'5%', }}>{match[pointer].footprint}%</Text>
                       <Text style={{ color:'#F46868', fontFamily:'B', marginLeft:'5%', marginTop:'5%'}}>Meme tags:</Text>
                       <View style={{flexDirection:'row', display:'flex', marginHorizontal:'5%', paddingVertical:'5%'}}>
                           <Chip style={{marginRight:'1.5%'}}>{match[pointer].tags[0]}</Chip><Chip style={{marginRight:'1.5%'}}>{match[pointer].tags[1]}</Chip>
                           <Chip style={{marginRight:'1.5%'}}>{match[pointer].tags[2]}</Chip></View>
                           <Text style={{ color:'#F46868', fontFamily:'B', marginLeft:'5%', marginTop:'5%'}}>TasteConnect:</Text>
                       <View style={{flexDirection:'row', display:'flex', marginHorizontal:'5%', paddingVertical:'10%'}}>
                           <Image source={require('../assets/veg.png')} style={{width:30, height:30, marginRight:'5%'}}></Image>
                           <Image source={require('../assets/cup.png')} style={{width:30, height:30, marginRight:'5%'}}></Image>
                           <Image source={require('../assets/donut.png')} style={{width:30, height:30, marginRight:'5%'}}></Image>
                           <Image source={require('../assets/chin.png')} style={{width:30, height:30, marginRight:'5%'}}></Image>
                       </View></View>

                          </ScrollView></View>
                   <View style={{alignSelf:'center', flexDirection:'row', display:'flex', marginTop:'5%'}}>
                       <TouchableOpacity onPress={()=>_setPointer()}><Image source={require('../assets/redy.png')} style={{width:60, height:60, resizeMode:'contain'}}></Image></TouchableOpacity>
                       <TouchableOpacity onPress={()=>navigation.navigate('Matched',{name:match[pointer].name, age:match[pointer].age, img1:match[pointer].avatar})}><Image source={require('../assets/redh.png')} style={{width:70, height:70, resizeMode:'contain'}}></Image></TouchableOpacity>
                       <TouchableOpacity onPress={()=>_setPointer()}><Image source={require('../assets/redx.png')} style={{width:60, height:60, resizeMode:'contain'}}></Image></TouchableOpacity>
                   </View></View>
               </ImageBackground>}
               {pointer==-1 &&
               <View><Text style={{fontFamily:'S', color:'#F14848', width:'80%',height:400, alignSelf:'center', fontSize:20, textAlign:'center', marginTop:'20%'}}>Sorry, you've reached the end of the list!</Text>
               <View style={{flexDirection:'row', display:'flex', position:'absolute', bottom:20, marginHorizontal:'10%'}}>
                   <TouchableOpacity><Icon name="home" type="entypo" color="#F14848" style={{marginRight:'25%'}}></Icon></TouchableOpacity>
                   <TouchableOpacity><Icon name="chatbubble" type="ionicon" color="#F14848" style={{marginRight:'30%'}}></Icon></TouchableOpacity>
                   <TouchableOpacity><Icon name="user" type="font-awesome" color="#F14848" style={{marginRight:'25%'}}></Icon></TouchableOpacity>
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