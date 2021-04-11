import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Signup() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/b.ttf'),
        M: require('../assets/fonts/m.ttf'),
        R: require('../assets/fonts/m.ttf'),
        S: require('../assets/fonts/s.ttf'),

      });
      if (!fontLoaded) {
        return null;
      }
      const _setName = async () =>{
            try {
              await AsyncStorage.setItem('@username', 'Mark')
            } catch (e) {
              // saving error
            }
          
      }
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}><Icon name="chevron-left" type="entypo" size={30} color="#F14848"></Icon>
                <Text style={{textAlign:'justify', color:"#F14848",fontSize:25, fontFamily:'S', fontWeight:'bold'}}>Sign up</Text>
                </View>
                <Text style={{textAlign:'justify', color:"#F14848",fontSize:25, fontFamily:'S', fontWeight:'bold', marginLeft:'5%', marginTop:'35%'}}>Create a new account</Text>
                <TextInput placeholder="full name" style={{fontFamily:'S', fontSize:20, alignSelf:'center', color:'#F14848', marginTop:'5%',
                paddingLeft:'5%', textAlign:'left', width:'90%', backgroundColor:'#f7d7d7', borderRadius:20, paddingVertical:'5%', fontWeight:'bold'}} placeholderTextColor="#f55f5f"></TextInput>
                <TextInput placeholder="email address" style={{fontFamily:'S', fontSize:20, alignSelf:'center', color:'#F14848', marginTop:'5%',
                paddingLeft:'5%', textAlign:'left', width:'90%', backgroundColor:'#f7d7d7', borderRadius:20, paddingVertical:'5%', fontWeight:'bold'}} placeholderTextColor="#f55f5f"></TextInput>
                <TextInput secureTextEntry placeholder="choose password" style={{fontFamily:'S', fontSize:20, alignSelf:'center', color:'#F14848', marginTop:'5%',
                paddingLeft:'5%', textAlign:'left', width:'90%', backgroundColor:'#f7d7d7', borderRadius:20, paddingVertical:'5%', fontWeight:'bold'}} placeholderTextColor="#f55f5f"></TextInput>
                <TextInput secureTextEntry placeholder="confirm password" style={{fontFamily:'S', fontSize:20, alignSelf:'center', color:'#F14848', marginTop:'5%',
                paddingLeft:'5%', textAlign:'left', width:'90%', backgroundColor:'#f7d7d7', borderRadius:20, paddingVertical:'5%', fontWeight:'bold'}} placeholderTextColor="#f55f5f"></TextInput>
            </View>
            <TouchableOpacity onPress={()=>{_setName(); navigation.navigate('Home')}}><View style={{marginTop:'15%', width:'70%', backgroundColor:'#F14848', alignSelf:'center', borderRadius:50}}>
                <Text style={{fontFamily:'B', color:'#FFF', fontSize:15, paddingVertical:'7.5%', textAlign:'center', fontWeight:'bold'}} >Sign up</Text>
            </View></TouchableOpacity>
           
            

          
            <Text style={{fontFamily:'B', textAlign:'center', fontSize:15, marginTop:'2.5%',color:'#F14848', textDecorationStyle:'solid', textDecorationLine:'underline'}} onPress={()=>navigation.navigate('Signup')}>or login to an existing account</Text>
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