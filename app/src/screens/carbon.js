import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-paper';
import { Chip } from 'react-native-paper';


export default function Carbon() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
        R: require('../assets/fonts/m.ttf'),
        S: require('../assets/fonts/s.ttf'),

      });
      var [pointer, setPointer] = useState(0);
      const [car, setCar] = useState(false);
      const [carpool, setCarpool] = useState(false);
      const [carpoolText, setCarpooltext] = useState('No');
      const [track, setTrack] = useState(false);
      const [trackText, setTrackText] = useState('No');
      const [bus, setBus] = useState(false);
      const [taxi, setTaxi] = useState(false);
      const [motor, setMotor] = useState(false);
      const [cycle, setCycle] = useState(false);
      const [train, setTrain] = useState(false);
      const [walk, setWalk] = useState(false);

      
      if (!fontLoaded) {
        return null;
      }
   
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/footbg.png')} style={{width:'100%', height:300, resizeMode:'contain'}}>
            
            <View style={{ marginTop: '20%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}>
               <TouchableOpacity><Icon name="chevron-left" type="entypo" size={30} color="#6BCF87"></Icon></TouchableOpacity>
                </View>
                <Text style={{textAlign:'left', color:"#4BB869",fontSize:25, fontFamily:'B', marginHorizontal:'5%', marginTop:'15%'}}>Calculate your carbon footprint </Text>
            </View></ImageBackground>    
           <View style={{marginHorizontal:'2.5%', marginTop:'5%', width:'90%', alignSelf:'center'}}>
                
              
            
               <View>
                   <Text style={{fontFamily:'S', color:'#6BCF87',marginLeft:'10%', fontSize:20, textAlign:'left', marginTop:'1%'}}>usual mode(s) of transport</Text>
                   <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%', flexWrap:'wrap', marginTop:'5%', alignContent:'center', alignSelf:'center'}}>
            <Chip onPress={() =>{setCar(!car)} } style={{width:'25%', marginRight:'1.5%', marginBottom:'2.5%', backgroundColor:"#6BCF87", alignSelf:'center'}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF" selected={car}>Car</Chip>
            <Chip onPress={() =>{setBus(!bus)} } style={{width:'25%', marginRight:'1.5%', marginBottom:'2.5%', backgroundColor:"#6BCF87", alignSelf:'center'}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF" selected={bus}>Bus</Chip>
            <Chip onPress={() =>{setCycle(!cycle)} } style={{width:'25%', marginRight:'1.5%', marginBottom:'2.5%', backgroundColor:"#6BCF87", alignSelf:'center'}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF" selected={cycle}>Cycle</Chip>
            <Chip onPress={() =>{setTaxi(!taxi)} } style={{width:'25%', marginRight:'1.5%', marginBottom:'2.5%', backgroundColor:"#6BCF87", alignSelf:'center'}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF" selected={taxi}>Taxi</Chip>
            <Chip onPress={() =>{setTrain(!train)} } style={{width:'25%', marginRight:'2.5%', marginBottom:'2.5%', backgroundColor:"#6BCF87", alignSelf:'center'}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF" selected={train}>Train</Chip>
            <Chip onPress={() =>{setMotor(!motor)} } style={{width:'35%', marginRight:'2.5%', marginBottom:'2.5%', backgroundColor:"#6BCF87", alignSelf:'center'}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF" selected={motor}>Motorbike</Chip>
            <Chip onPress={() =>{setWalk(!walk)} } style={{width:'25%', marginRight:'2.5%', marginBottom:'2.5%', backgroundColor:"#6BCF87", alignSelf:'center'}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF" selected={walk}>Walk</Chip>
            </View>
            <Text style={{fontFamily:'S', color:'#6BCF87',marginLeft:'10%', fontSize:20, textAlign:'left', marginTop:'5%'}}>do you carpool?</Text>
            <Chip onPress={() =>{setCarpool(!carpool); setCarpooltext(carpool?"No":"Yes")} } style={{width:'25%', marginLeft:'10%', marginTop:'2.5%', backgroundColor:"#6BCF87"}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF"  selected={carpool}>{carpoolText}</Chip>
            <Text style={{fontFamily:'S', color:'#6BCF87',marginLeft:'10%', fontSize:20, textAlign:'left', marginTop:'5%'}}>track driving habits?</Text>
            <Chip onPress={() =>{setTrack(!track); setTrackText(track?"No":"Yes")} } style={{width:'25%', marginLeft:'10%', marginTop:'2.5%', backgroundColor:"#6BCF87"}} textStyle={{fontFamily:'S', fontSize:12, textAlign:'center'}} selectedColor="#FFF"  selected={track}>{trackText}</Chip>
            
               </View>
               
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('#')}><View style={{marginTop:'5%', width:'40%', backgroundColor:'#6BCF87', marginLeft:'10%', borderRadius:50, display:'flex', flexDirection:'row',  marginLeft:'15%'}}>
                <Text style={{fontFamily:'S', color:'#FFF', fontSize:15, textAlign:'center', marginLeft:'12.5%', marginVertical:'2.5%', textAlignVertical:'center', paddingVertical:'2.5%'}} >Driving Habits  </Text><Icon name="arrow-forward-circle" type="ionicon" color="#FFF" size={20} style={{textAlignVertical:'center', marginVertical:'50%'}}></Icon>
            </View></TouchableOpacity>
            <View style={{flexDirection:'row', display:'flex', position:'absolute', bottom:20, marginHorizontal:'10%'}}>
                   <TouchableOpacity><Icon name="home" type="entypo" color="#6BCF87" style={{marginRight:'25%'}}></Icon></TouchableOpacity>
                   <TouchableOpacity><Icon name="chatbubble" type="ionicon" color="#6BCF87" style={{marginRight:'30%'}}></Icon></TouchableOpacity>
                   <TouchableOpacity><Icon name="user" type="font-awesome" color="#6BCF87" style={{marginRight:'25%'}}></Icon></TouchableOpacity>
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