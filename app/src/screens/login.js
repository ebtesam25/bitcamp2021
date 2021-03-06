import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Signin() {
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
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%', marginHorizontal:'5%' }}>
                <View style={{flexDirection:'row', display:'flex'}}><Icon name="chevron-left" type="entypo" size={30} color="#F14848"></Icon>
                <Text style={{textAlign:'justify', color:"#F14848",fontSize:25, fontFamily:'S', fontWeight:'bold'}}>Sign in</Text>
                </View>
                <Text style={{textAlign:'justify', color:"#F14848",fontSize:25, fontFamily:'S', fontWeight:'bold', marginLeft:'5%', marginTop:'35%'}}>Login to your account</Text>
                <TextInput placeholder="email address" style={{fontFamily:'S', fontSize:20, alignSelf:'center', color:'#F14848', marginTop:'5%',
                paddingLeft:'5%', textAlign:'left', width:'90%', backgroundColor:'#f7d7d7', borderRadius:20, paddingVertical:'5%', fontWeight:'bold'}} placeholderTextColor="#f55f5f"></TextInput>
                <TextInput secureTextEntry placeholder="password" style={{fontFamily:'S', fontSize:20, alignSelf:'center', color:'#F14848', marginTop:'5%',
                paddingLeft:'5%', textAlign:'left', width:'90%', backgroundColor:'#f7d7d7', borderRadius:20, paddingVertical:'5%', fontWeight:'bold'}} placeholderTextColor="#f55f5f"></TextInput>
            </View>
            <Text style={{fontFamily:'B', textAlign:'left', marginLeft:'12.5%', fontSize:15, fontWeight:'bold', color:'#F14848', textDecorationStyle:'solid', textDecorationLine:'underline', marginTop:'1.5%'}}>forgot your password?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('#')}><View style={{marginTop:'15%', width:'70%', backgroundColor:'#F14848', alignSelf:'center', borderRadius:50}}>
                <Text style={{fontFamily:'B', color:'#FFF', fontSize:15, paddingVertical:'7.5%', textAlign:'center', fontWeight:'bold'}} >Sign in</Text>
            </View></TouchableOpacity>
           
            

          
            <Text style={{fontFamily:'B', textAlign:'center', fontSize:15, marginTop:'2.5%',color:'#F14848', textDecorationStyle:'solid', textDecorationLine:'underline'}} onPress={()=>navigation.navigate('Signup')}>or create an account</Text>
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